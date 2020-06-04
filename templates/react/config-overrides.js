const { override, fixBabelImports, addWebpackAlias, disableEsLint, addPostcssPlugins } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src')
  }),
  disableEsLint(),
  addPostcssPlugins([require('postcss-px2rem')({ remUnit: 50 })])
);