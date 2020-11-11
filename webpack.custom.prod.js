const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = resolutionRoot => ({
  entry: {
    app: path.resolve(resolutionRoot, 'src/src/index.tsx'),
  },
  output: {
    path: path.resolve(resolutionRoot, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/src/index.html',
      filename: './index.html',
      chunks: ['app'],
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeEmptyAttributes: true
      }
    })
  ]
});
