const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = resolutionRoot => ({
  entry: {
    app: path.resolve(resolutionRoot, 'src/childApp/index.tsx'),
  },
  output: {
    path: path.resolve(resolutionRoot, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/childApp/index.html',
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
