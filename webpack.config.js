const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const Dotenv = require('dotenv-webpack')

const projectPath = path.resolve(__dirname, './')
const plugins = []
const dir = {
  project: projectPath,
  src: path.join(projectPath, 'src'),
  css: path.join(projectPath, 'src/css'),
  assets: path.join(projectPath, 'assets'),
  config: path.join(projectPath, 'config'),
  build: path.join(projectPath, 'build'),
  dist: path.join(projectPath, 'dist'),
  mocks: path.join(projectPath, 'src/__mocks__'),
}

module.exports = (env = {}, argv) => {
  const isProd = argv.mode === 'production'
  const outputPath = isProd ? dir.dist : dir.build

  plugins.push(
    new Dotenv({
      path: 'env/.env',
      safe: true,
    })
  )

  plugins.push(
    new HtmlWebpackPlugin({
      title: 'Rental-up.com',
      template: `${dir.mocks}/index.ejs`,
      filename: 'index.html',
      chunks: ['lp'],
    })
  )

  // plugins.push(
  //   new HtmlWebpackPlugin({
  //     title: 'Rental-up.com',
  //     template: `${dir.mocks}/index.ejs`,
  //     filename: 'app.html',
  //     chunks: ['app'],
  //   })
  // )

  // plugins.push(
  //   new HtmlWebpackPlugin({
  //     title: 'Rental-up.com',
  //     template: `${dir.mocks}/index.ejs`,
  //     filename: 'login.html',
  //     chunks: ['login'],
  //   })
  // )

  // Copy extra assets into build directory
  plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${dir.assets}/`,
          to: `${isProd ? dir.dist : dir.build}/assets`,
        },
      ],
    })
  )

  if (!isProd) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name]-[hash].css',
        chunkFilename: '[id].css',
      })
    )
  }

  const entry = {
    lp: [`${dir.src}/Lp/Index.tsx`],
    // app: [`${dir.src}/App/Index.tsx`],
    // login: [`${dir.src}/SignIn/Index.tsx`],
  }

  if (!isProd) {
    for (const [, e] of Object.entries(entry)) {
      e.unshift('react-hot-loader/patch')
    }
  }

  const cssExtractConfig = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '/',
    },
  }

  const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts", "./src/**/*.js"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  });

  return {
    context: dir.project,
    entry,
    output: {
      filename: '[name]-[hash].js',
      path: outputPath,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx|ts$/,
          use: 'ts-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.(sa|c|sc)ss$/,
          use: [
            isProd ? cssExtractConfig : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'global',
                  localIdentName: '[folder]-[name]-[hash:base64:6]',
                  exportLocalsConvention: 'camelCase',
                },
                url: false,
                sourceMap: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                ident: 'postcss',
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                  ...(isProd ? [purgecss] : [])
                ],
              },
            },
            // {
            //   loader: 'sass-loader',
            //   // options doc -> https://github.com/sass/node-sass
            //   options: {
            //     sassOptions: {
            //       sourceMap: true,
            //       includePaths: [dir.css],
            //     },
            //   },
            // },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath : 'images/',
              },
            },
          ],
        },
        {
          test: /\.(ya?ml)$/i,
          use: [
            {
              loader: 'json-loader',
            },
            {
              loader: 'yaml-loader',
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'react-svg-loader',
            },
          ],
        },
        // {
        //   test: /\.(graphql|gql)$/,
        //   exclude: /node_modules/,
        //   loader: 'graphql-tag/loader',
        // },
      ],
    },
    plugins: plugins,
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.tsx'],
      modules: ['node_modules', dir.project, dir.src],
      alias: {
        '@': dir.src,
        joi: 'joi-browser',
        'react-dom': !isProd ? '@hot-loader/react-dom' : 'react-dom',
      },
    },
    devServer: {
      contentBase: dir.build,
      port: 8000,
      host: 'localhost',
      disableHostCheck: true,
      hot: true,
      historyApiFallback: {
        rewrites: [{ from: /^\/login\/?/, to: '/login.html' }],
      },
      inline: true,
      // https: true,
      open: true,
    },
  }
}
