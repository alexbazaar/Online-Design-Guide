// @flow
/**
 * This file contains the procedure for setting up a general-purpose Express
 * server for serving a universal (a.k.a. isomorphic) web application using
 * the Component Library.
 */

// Add Flow types as globals so that ESLint doesn't complain about them not being imported.
/*
global express$Application
global express$Request
global express$Response
global express$NextFunction
global express$Middleware
global Store
global React$Node
*/

import Express from "express";
import compression from "compression";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import Helmet from "react-helmet";
import { EmbeddedStylesContext } from "../helpers/utilities";

import indexTemplate from "./views/index.ejs";
import { head } from "lodash";

type HttpMethod = "GET" | "PUT" | "POST" | "DELETE" | "PATCH" | "OPTIONS";
type Manifest = { [string]: string };

interface ILocation {
  pathname: string;
  search: string;
}

type Preloader = (request: express$Request, store: Store) => Promise<*>;

/**
 * This class enables the easy adoption of a standard isomorphic/universal
 * server for delivering React+Redux web applications that use the Component
 * Library.
 */
export class Server
{
  server: express$Application;
  createReduxStore: () => Store;
  rootComponent: React$Node;
  preloader: Preloader;
  manifest: Manifest;

  /**
   * Constructor for {@link Server}.
   *
   * All instances of server are backed by an {@link Express} instance. To
   * enable customization of the raw Express object a pre-existing Express
   * instance may be supplied as an argument.
   *
   * A helper function {@link ConfigureServer} is included to provide a useful
   * set of common settings while still allowing deep customization. See that
   * method's documentation for more information.
   *
   * @param {Express|null} server The Express server that backs this instance.
   */
  constructor(server?: express$Application)
  {
    this.server = server || ConfigureServer(() => {}).server;
    this.preloader = () => Promise.resolve();
  }

  /**
   * Provides the ability to supply a Redux store object to the server for use
   * in server-side rendering.
   *
   * @param {Store} f The function that creates the Redux store to use.
   */
  useReduxStoreCreator(f: () => Store)
  {
    this.createReduxStore = f;
  }

  /**
   * Provides the ability to supply the root component that should be rendered.
   *
   * Example:
   * <code>
   *   import App from "../containers/AppContainer";
   *   const server = ConfigureServer();
   *   server.useRootComponent(<App />);
   *   server.listen();
   * </code>
   *
   * @param {React.Component} rootComponent The root component for the app.
   */
  useRootComponent(rootComponent: React$Node)
  {
    this.rootComponent = rootComponent;
  }

  /**
   * Provides the ability to specify a function that has an opportunity to
   * preload data and insert it into the Redux store before the server-side
   * render occurs. This allows for external data to be pre-loaded and baked
   * into the response in a way that the client won't need to re-fetch it.
   *
   * Using this function is optional. If supplied, it should take the following
   * form:
   *
   * <code>
   *   (url, store) => Promise;
   * </code>
   *
   * The `url` parameter is the current path being requested (i.e. request.url).
   * The `store` parameter is the Redux store that was supplied using
   * {@link useReduxStoreCreator}.
   * The function should return a Promise object.
   *
   * Below is an example that assumes you have an external routes file of the
   * form:
   *
   * <code>
   *   import Home from "./components/Home";
   *   import { fetchThingOne, fetchThingTwo } from "./redux/actions";
   *   const routes = [
   *     {
   *       component: Home,
   *       preloadData: (route, store) => {
   *         return Promise.all([
   *           store.dispatch(fetchThingOne()),
   *           store.dispatch(fetchThingTwo())
   *         ]);
   *       }
   *     }
   *   ];
   * </code>
   *
   * This example will loop through the routes until it finds the one that
   * matches and will be rendered. Then it looks to see if the route has a
   * `preloadData` property that is a function. If so, it calls it and adds
   * it to the list of Promise objects that need to resolve before rendering
   * can continue.
   *
   * Example:
   * <code>
   *   import { matchPath } from "react-router-dom";
   *   import { ConfigureServer } from "ols-ui/server";
   *   import routes from "./routes";
   *   const server = ConfigureServer();
   *   server.usePreloader((url, store) => {
   *     const promises = [];
   *     routes.some((route) => {
   *       // Use `matchPath` to find the route that will have its component rendered.
   *       const match = matchPath(url, route);
   *       if (match && typeof route.preloadData === "function") {
   *         promises.push(route.preloadData(match, store));
   *       }
   *     });
   *     return Promise.all(promises);
   *   });
   * </code>
   *
   * @param {Preloader} f The preloader function.
   */
  usePreloader(f: Preloader): void
  {
    this.preloader = f;
  }

  /**
   * Provides the ability to specify a Webpack manifest file. This file will
   * be used to insert URLs into the rendered HTML to the generated stylesheets,
   * javascript files, and other resources that are built by Webpack.
   *
   * The manifest object should have simple string keys and values that map
   * the original name of the file to its built-and-hashed output file.
   *
   * Example:
   * <code>
   *   const manifest = {
   *     "main.js": "main-a1b2c3d4e5f6g.js",
   *     "main.css": "main-g6f5e4d3c2b1a.css"
   *   };
   *   server.useManifest(manifest);
   * </code>
   *
   * @param {Object} manifest A Webpack manifest object.
   */
  useManifest(manifest: Manifest)
  {
    this.manifest = manifest;
  }

  /**
   * Provides the ability to specify the folder that contains the view templates
   * that can be used when rendering routes.
   *
   * @param {string} viewsFolderPath The path to the folder containing the views.
   * @param {string} viewEngine The view engine to use; default = "ejs".
   */
  useViews(viewsFolderPath: string, viewEngine: string = "ejs")
  {
    this.server.set("view engine", viewEngine);
    this.server.set("views", viewsFolderPath);
  }

  /**
   * Provides the ability to specify the folder that contains the static assets
   * that can be served by this server.
   *
   * @param {string} staticFolderPath The path to the folder containing the
   *                                  static assets.
   */
  useStaticFolderPath(staticFolderPath: string)
  {
    // Set up static asset routes.
    this.server.use(Express.static(staticFolderPath));
  }

  /**
   * Starts the server listening on the supplied port.
   *
   * This should be the final command after all configuration is complete.
   *
   * @param {number} port The port to listen on; default = 3000.
   */
  listen(port: number = 3000)
  {
    // Add the default route before starting the listener.
    this.server.get("*", this.defaultRoute());
    // Start the server listening on the supplied (or default) port.
    this.server.listen(port, () => {
      });
  }

  // ===========================================================================
  // Route functions

  /**
   * Provides a simple way to add a new route to the server. This is a simple
   * wrapper around the Express API methods. The `path` parameter accepts all
   * values supported by Express. The `handler` parameter can be anything that
   * conforms to the Express middleware interface.
   *
   * @param {string} method The HTTP method that will respond to this route.
   *                        Must be GET, PUT, POST, DELETE, PATCH, or OPTIONS.
   * @param {string} path   The URL path to add.
   * @param {function} handler The function that will handle requests for `path`.
   */
  addRoute(method: HttpMethod, path: string, handler: express$Middleware)
  {
    const httpMethod = method.toUpperCase();
    switch (httpMethod) {
      case "GET":
        this.server.get(path, handler);
        break;
      case "PUT":
        this.server.put(path, handler);
        break;
      case "POST":
        this.server.post(path, handler);
        break;
      case "DELETE":
        this.server.delete(path, handler);
        break;
      case "PATCH":
        this.server.patch(path, handler);
        break;
      case "OPTIONS":
        this.server.options(path, handler);
        break;
      default:
        throw `Unsupported HTTP method: ${method}`;
    }
  }

  /**
   * This function returns the default route to use for this server.
   *
   * The default behavior will render our index template and render the component
   * supplied by `useRootComponent`, building the Redux state in the store
   * provided by `useReduxStore`. The result (and critical CSS styles)
   * will be rendered and returned to the client along with the client version
   * of the application so that it can pick up where the server-side rendering
   * left off.
   *
   * This method is guaranteed to be the last one added to Express so it will
   * only be run if no app-supplied routes match.
   *
   * TODO: Handle what happens when the container needs to load external
   * data in order to render properly. This is required to support a proper page
   * load if JavaScript happens to be disabled on the client.
   *
   * @returns {function}
   */
  defaultRoute(): express$Middleware
  {
    // eslint-disable-next-line no-unused-vars
    return (request: express$Request, response: express$Response, next: express$NextFunction) => {
      const store = this.createReduxStore();
      // Load external data if applicable.
      this.preloader(request, store).then(() => {
        // Prepare our current state to embed in the response.
        const reduxState = escape(JSON.stringify(store.getState()));
        // Prepare to collect CSS used in the rendered components.
        const css = new Set(); // CSS for all rendered React components
        // Reset our header state.
        const header = Helmet.rewind();
        // Render the component.
        const context = {};
        const content = ReactDOMServer.renderToStaticMarkup(
          <EmbeddedStylesContext onInsertCss={(style) => { css.add(style); }}>
            <Provider store={store}>
              <StaticRouter location={request.url} context={context}>
                {this.rootComponent}
              </StaticRouter>
            </Provider>
          </EmbeddedStylesContext>
        );
        // Collect the rendered styles for insertion into our template.
        const styles = [ ...css ].join("");
        // Render the response.
        const responseBody = indexTemplate({
          header,
          content,
          styles,
          reduxState,
          manifest: this.manifest
        });
        response.send(responseBody);
      }).catch((error) => {
        Helmet.rewind();
        next(error);
      });
    };
  }

  // ===========================================================================
  // Error handling functions

  /**
   * Error handler for the default route.
   *
   * This method will detect if there is an error and then set the appropriate
   * value on the response. If an error was handled, this method will return
   * `true` and return `false` otherwise.
   *
   * @param {Error|null} error An optional error object.
   * @param {Location} redirectLocation The new location if a redirect was found.
   * @param {Object} renderProps The React props used to render this request.
   * @param {Request} request The current request object.
   * @param {Response} response The current response object.
   * @param {function} next The next item in the chain to process this request.
   * @returns {boolean}
   */
  handledError(error: ?Error, redirectLocation: ILocation, renderProps: ?{}, request: express$Request, response: express$Response, next: express$NextFunction): boolean // eslint-disable-line no-unused-vars
  {
    // If we have a `redirectLocation`, then set the redirect on the response
    // and return.
    if (redirectLocation) {
      response.redirect(301, this.formatPath(redirectLocation));
      return true;
    }
    // If we have an error object, set the HTTP status and message and return.
    if (error) {
      response.status(500).send(error.message);
      return true;
    }
    // If our `renderProps` are `null`, then it means that there is no view
    // available for this route, so return a 404.
    if (renderProps === null || renderProps === undefined) {
      response.status(404).send("Not Found");
      return true;
    }
    return false;
  }

  /**
   * TODO: Add support for this.
   */
  addErrorHandler()
  {
    
  }

  /**
   * TODO: Hook this up.
   * @param {Location} redirectLocation The new location if a redirect was found.
   * @returns {function}
   */
  default3xxErrorHandler(redirectLocation: ILocation): express$Middleware
  {
    return (request: express$Request, response: express$Response) => {
      response.redirect(301, this.formatPath(redirectLocation));
    };
  }

  /**
   * TODO: Hook this up.
   * @param {Error} error The error encountered rendering this request.
   * @returns {function}
   */
  default404ErrorHandler(error: Error): express$Middleware // eslint-disable-line no-unused-vars
  {
    return (request: express$Request, response: express$Response) => {
      response.status(404).send("Not Found");
    };
  }

  /**
   * TODO: Hook this up.
   * @param {Error} error The error encountered rendering this request.
   * @returns {function}
   */
  defaultErrorHandler(error: Error): express$Middleware
  {
    return (request: express$Request, response: express$Response) => {
      response.status(500).send(error.message);
    };
  }

  // ===========================================================================
  // Helper functions

  /**
   * Construct the common path from a location.
   *
   * @param {Object} location A location object.
   * @returns {string}
   */
  formatPath(location: ILocation): string
  {
    return location.pathname + location.search;
  }

}

/**
 * Provides a simple way to pre-configure an Express server for usage in a
 * {@link Server} instance.
 *
 * This method is very non-opinionated and simply sets some basic options
 * (like compression) and disables some features (like "x-powered-by").
 *
 * Further customization can be done by supplying a function that will be passed
 * the Express object just before it is used to create and return an instance of
 * {@link Server}.
 *
 * Example:
 * <code>
 *   import { ConfigureServer } from "ols-ui/server";
 *   const server = ConfigureServer((express) => {
 *     // Enable strict routing
 *     express.enable("strict routing");
 *     // Enable *.pug file rendering.
 *     express.engine('pug', require('pug').__express);
 *   });
 *   server.listen();
 * </code>
 *
 * @param {function} doSetup An optional function to provide additional
 *                           configuration on the base Express object.
 * @returns {Server}
 */
export default function ConfigureServer(doSetup: ?(server: express$Application) => void): Server
{
  // Configure Express server.
  const express: express$Application = Express();
  // Enable HTTP compression.
  express.use(compression());
  // Remove Express header addition.
  express.disable('x-powered-by');
  // Set an environment variable that can be queried to check whether this is being
  // rendered server-side or not.
  process.env.ON_SERVER = "true";

  if (typeof doSetup === "function") {
    doSetup(express);
  }

  return new Server(express);
}
