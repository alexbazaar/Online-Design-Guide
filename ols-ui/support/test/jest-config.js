const FILE_EXTENSIONS = '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$';

module.exports = (rootDir, aliases = {}) => {
  return {
    moduleNameMapper: Object.assign(
      {
        [FILE_EXTENSIONS]: __dirname + "/fileMock.js",
        '^[./a-zA-Z0-9!&$_-]+\\.(css|scss)$': 'identity-obj-proxy'
      },
      aliases
    ),
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    testPathIgnorePatterns: [ '<rootDir>/(build|docs|node_modules|images)/' ],
    testEnvironment: 'jsdom',
    // testRegex: '\\.test.js$',
    collectCoverageFrom: [ '**/*.js', '!**/tests/**' ],
    setupFiles: [
      __dirname + "/shim.js",
      __dirname + "/setup.js"
    ],
    rootDir
    // verbose: true
  };
};
