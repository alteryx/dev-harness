const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'harness/index.tsx'),
    childApp: path.resolve(__dirname, 'src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true,
    port: 8080
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.json'],
  },
  optimization: {
    runtimeChunk: 'single'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './harness/index.html',
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
      template: './src/index.html',
      filename: './childApp.html',
      chunks: ['childApp'],
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeEmptyAttributes: true
      }
    }),
    new CleanWebpackPlugin(),
    // ensure paths are cased correctly even on windows machines
    new CaseSensitivePathsPlugin(),
    // create css files for build (different loaders in webpack.dev.js and webpack.prod.js)
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    // run ts type checker in a separate process for faster builds
    new ForkTsCheckerWebpackPlugin(),

    // compression output bundles for file size
    new CompressionPlugin()
  ],
  module: {
    rules: [
      // transpile js and jsx to es5
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', 'jsx']
        },
        use: {
          loader: 'babel-loader',
        }
      },
      // transpile ts and tsx to esnext then to es5 with babel
      {
        test: /\.tsx?$/,
        use: [
          {
           loader: 'babel-loader',
           options: {
             cacheDirectory: true
           }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            },
          }
        ],
        exclude: /node_modules/,
      },
      // handle images
      {
        test: /\.(png|svg|jpg|gif)$/,
        // exclude: /(?!node_modules\/@ayx)(node_modules)/,
        use: ['file-loader']
      },
      // handle fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        // exclude: /(?!node_modules\/@ayx)(node_modules)/,
        use: ['file-loader']
      }
    ]
  },
};
