/* eslint-disable no-console */

const detect = require('detect-port');

// Determines whethere the given port is in use
module.exports = (port, callback) => {
  detect(port, (error, unusedPort) => {
    if (error) {
      console.error('Unable to detect available ports: ', error);
      process.exit();
    }
    if (parseInt(port) === unusedPort) {
      callback();
    } else {
      console.error(`Port: ${port} is in use. To figure out what is using the port, you can run 'sudo lsof -i:${port}' from your terminal.`);
      process.exit();
    }
  });
};
