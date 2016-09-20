var path = require('path');

exports.extensionInfo = {
  extensionType: 'widget'
};
exports.IDEImages = [
  path.resolve(__dirname, 'ide', 'images', '*')
];

exports.widgetsJS = [
  path.resolve(__dirname, 'widgets', '**', '*.js')
];

exports.widgetsCSS = [
  path.resolve(__dirname, 'widgets', '**', '*.scss')
];

exports.runtimeLibraries = function() {
  var libs = [
    path.resolve(__dirname, 'runtime', 'js', "3dsvg.js"),
  ];
  return libs;
};

exports.runtimeAngularModulesRequires = ['tml-svg'];