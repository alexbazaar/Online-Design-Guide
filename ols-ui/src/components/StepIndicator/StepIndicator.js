import React from "react";
import PropTypes from "prop-types";
import StepIndicatorItem from "./StepIndicatorItem";
import List from "../List";
import styles from "./StepIndicator.scss";
/**
*  Provides a generic Step Indicator
*  This class is meant to be used in conjunction with {@link StepIndicatorItem}
*  component.
*  Example:
*  <code>
*  <StepIndicator>
*    <StepIndicatorItem>
*      Item 1
*    </StepIndicatorItem>
*    <StepIndicatorItem>
*      Item 2.
*    </StepIndicatorItem>
*    <StepIndicatorItem>
*      Item 3.
*    </StepIndicatorItem>
*   </StepIndicator>
*  </code>
*/
export default class StepIndicator extends React.Component {

  /**
   * constructor
   * sets title to blank string
   * @param  {type} props description
   */
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  /**
   * TODO: Replace this for future version of react.
   * UNSAFE_componentWillMount - description
   * This reaches down the the child component {@link StepIndicatorItem}
   * to access the data: step status, the children node/string, step title
   * This builds out the StepIndicator title.
   *
   * This is implemented instead of the recommended `componentDidMount()`
   * to solve the bug in IE in which `componentDidMount()` did not fire at all.
   *
   */
  UNSAFE_componentWillMount() {
    // Counts max steps for the title
    const maxSteps = this.props.children.length;

    for (let i = 0; i < maxSteps; i++) {
      if (this.props.children[i].props.status === "active") {
        const stepNum = i + 1; // this.props.children.props.children is not always going to be step number

        // TO DO (below): Add a check if the title exists. If the title does not exist, spit out the "Step X of Y" with no title.
        const stepTitle = "Step " + stepNum +
                          " of " + this.props.children.length +
                          ": " + this.props.children[i].props.title;

        // Spits out the prop "title" with new information from above.
        this.setState({
          title: stepTitle,
          maxSteps: maxSteps
        });
      }
    }
    // }
  }

  /**
   * renderStepItem
   * render step indicator item based on status
   * @param  {type} datasource description
   * @returns {type}            description
   */
  renderStepItem(datasource) {
    for (let i = 0; i < datasource.length; i++) {
      if (datasource[i].stepNum === this.props.active) {
        datasource[i].status = "active";
      } else if (datasource[i].stepNum === this.props.completed) {
        // TO-DO: Needs a more robust rewrite
        datasource[i].status = "completed";
      } else {
        datasource[i].status = "default";
      }
    }

    // Steps through a datasource to determine children. See below also.
    const stepItems = datasource.map((item, index) =>
      <StepIndicatorItem
        key={index}
        stepNum={item.stepNum}
        title={item.title}
        status={item.status}
        stepRoute={item.stepRoute}
      >
        {item.content}
      </StepIndicatorItem>
    );

    return stepItems;
  }

  /**
   * Render component based on if data source is passed or StepIndicatorItem components are nested within component.
   * @returns {JSX.Element}
   */
  render() {
    const { children, datasource, ...otherProps } = this.props;
    // Datasource brings in the children in JSON array - see Tax Pros code for an example of how a data source comes into a table
    if (datasource) {
      return (
        <div data-component="StepIndicator" className={styles[`step-indicator-wrapper`]} {...otherProps}>
          <h2 className={styles['step-indicator-title']} data-component="StepIndicatorTitle">{this.state.title}</h2>
          <List type="ul">
            {this.renderStepItem(datasource)}
          </List>
        </div>
      );
    } else {
      const clonedChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          maxsteps: this.state.maxSteps
        });
      });
      // Manual entry of steps as children
      return (
        <div data-component="StepIndicator" className={styles[`step-indicator-wrapper`]} {...otherProps}>
          <h2 className={styles['step-indicator-title']} data-component="StepIndicatorTitle">{this.state.title}</h2>
          <List type="ul">
            {clonedChildren}
          </List>
        </div>
      );
    }


  }
}

StepIndicator.propTypes = {
  children: PropTypes.node,
  datasource: PropTypes.array,
  active: PropTypes.string,
  completed: PropTypes.string,
  maxSteps: PropTypes.string
};
