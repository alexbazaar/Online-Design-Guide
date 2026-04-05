/**
 * Get rids of the missing requestAnimationFrame polyfill warning.
 *
 * @link https://reactjs.org/docs/javascript-environment-requirements.html
 * @copyright 2004-present Facebook. All Rights Reserved.
 *
 * @param {Function} callback The callback function.
 */
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
