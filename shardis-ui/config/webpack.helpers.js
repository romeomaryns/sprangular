var path = require('path');

var absolutePath = function (args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
};

module.exports = {
  absolutePath: absolutePath
};
