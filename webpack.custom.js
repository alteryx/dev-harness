const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = resolutionRoot => ({
  entry: {
    app: path.resolve(resolutionRoot, 'src/parentApp/index.tsx'),
    childApp: path.resolve(resolutionRoot, 'src/childApp/index.tsx')
  },
  output: {
    path: path.resolve(resolutionRoot, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/parentApp/index.html',
      filename: './index.html',
      chunks: ['app'],
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeEmptyAttributes: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/childApp/index.html',
      filename: './childApp.html',
      chunks: ['childApp'],
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeEmptyAttributes: true
      }
    })
  ]
});