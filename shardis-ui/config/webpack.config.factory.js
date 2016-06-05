var path = require('path');
var webpack = require('webpack');

var validateWebpackConfig = require('webpack-validator');
var Joi = require('joi');

var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
var DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var autoprefixer = require('autoprefixer');

// Environments
const ENV = {
  DEV: 'development',
  PROD: 'production',
  TEST: 'test'
};

// Base configuration
var baseWebpackConfig = {

  resolve: {
    extensions: ['', '.ts', '.js'],
    cache: true
  },

  cache: true,
  debug: false,

  devtool: 'source-map',

  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: './src/main/frontend'
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: [
          fullPathTo('../node_modules')
        ]
      },
      {
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [
          fullPathTo('../node_modules/rxjs'),
          fullPathTo('../node_modules/@angular'),
          fullPathTo('../node_modules/@angular2-material'),
          fullPathTo('../node_modules/ng2-webstorage')
        ]
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript'
      },

      {
        test: /\.json$/,
        loader: 'json'
      },

      {
        test: /\.css$/,
        loader: 'raw'
      },

      {
        test: /\.html$/,
        loader: 'raw',
        exclude: [
          fullPathTo('../src/main/frontend/index.html')
        ]
      },

      {
        test: /\.(png|jpg|gif|svg)/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },

      {
        test: /\.(woff|eot|ttf|woff(2)?|otf)/i,
        loader: 'file-loader?[name].[ext]?[hash]'
      }

    ]
  },
  sassLoader: {
    includePaths: [
      './node_modules/font-awesome/scss',
      './node_modules/normalize.css'
    ]
  },
  postcss: [
    autoprefixer({browsers: ['last 2 versions'], remove: false})
  ],
  plugins: [
    new ForkCheckerPlugin()
  ]
};

// Returns full path to given relative directory
function fullPathTo(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}


// Customize config for dev environment
function customizeForDev(config) {

  config.metadata.host = 'localhost';
  config.metadata.port = 3000;

  config.entry = {
    'polyfills': './src/main/frontend/polyfills.ts',
    'vendor': './src/main/frontend/vendor.ts',
    'main': './src/main/frontend/main.ts'
  };

  config.output = {
    path: fullPathTo('../src/main/resources/static/'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    publicPath: 'http://localhost:3000/'
  };

  // Webpack Development Server config
  config.devServer = {
    port: config.metadata.port,
    host: config.metadata.host,
    contentBase: './src/main/frontend',
    outputPath: './tmp/',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    quiet: false,
    noInfo: false,
    proxy: {
      '/api/*': 'http://localhost:8080',
      '/auth/*': 'http://localhost:8080'
    }
  };

  // Saas config
  config.module.loaders.push({
    test: /main\.scss$/,
    loader: 'style!css?sourceMap!postcss!sass?sourceMap'
  });

  config.module.loaders.push({
    test: /\.scss$/,
    loader: 'raw!postcss!sass',
    exclude: [
      fullPathTo('../src/main/frontend/scss/main.scss')
    ]
  });

  // Additional plugins
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin(true));
  config.plugins.push(new CommonsChunkPlugin({
    name: ['main', 'vendor', 'polyfills'],
    minChunks: Infinity
  }));
  config.plugins.push(new CopyWebpackPlugin([
    {
      from: './src/main/frontend/assets',
      to: 'assets'
    }
  ]));
  config.plugins.push(new HtmlWebpackPlugin({template: './src/main/frontend/index.html', chunksSortMode: 'dependency'}));

}

// Customize config for production environment
function customizeForProd(config) {
  config.resolve.cache = false;
  config.cache = false;

  config.entry = {
    'polyfills': './src/main/frontend/polyfills.ts',
    'vendor': './src/main/frontend/vendor.ts',
    'main': './src/main/frontend/main.ts'
  };

  config.output = {
    path: fullPathTo('../src/main/resources/static'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js',
    publicPath: '/'
  };

  config.tslint.emitErrors = true;

  // Saas config

  var extractCSS = new ExtractTextPlugin('[name].[contenthash].css');

  config.module.loaders.push({
    test: /main\.scss$/,
    loader: extractCSS.extract(['css?sourceMap', 'postcss', 'sass?sourceMap'])
  });

  config.module.loaders.push({
    test: /\.scss$/,
    loader: 'raw!postcss!sass',
    exclude: [
      fullPathTo('../src/main/frontend/scss/main.scss')
    ]
  });

  config.plugins.push(extractCSS);


  // additional plugins
  config.plugins.push(new WebpackMd5Hash());
  config.plugins.push(new DedupePlugin());
  config.plugins.push(new OccurenceOrderPlugin(true));
  config.plugins.push(new CommonsChunkPlugin({
    name: ['main', 'vendor', 'polyfills'],
    minChunks: Infinity
  }));
  config.plugins.push(new CopyWebpackPlugin([
    {
      from: './src/main/frontend/assets',
      to: 'assets'
    }
  ]));
  config.plugins.push(new HtmlWebpackPlugin({template: './src/main/frontend/index.html', chunksSortMode: 'dependency'}));
  config.plugins.push(new UglifyJsPlugin({
    // beautify: true, //debug
    // mangle: false, //debug
    // dead_code: false, //debug
    // unused: false, //debug
    // deadCode: false, //debug
    // compress: {
    //   screw_ie8: true,
    //   keep_fnames: true,
    //   drop_debugger: false,
    //   dead_code: false,
    //   unused: false
    // }, // debug
    // comments: true, //debug

    beautify: false, //prod

    mangle: {
      screw_ie8: true,
      keep_fnames: true
    }, //prod

    compress: {
      screw_ie8: true
    }, //prod

    comments: false //prod
  }));

// Teach html-minifier about Angular 2 syntax
  config.htmlLoader = {
    minimize: true,
    removeAttributeQuotes: false,
    caseSensitive: true,
    customAttrSurround: [
      [/#/, /(?:)/],
      [/\*/, /(?:)/],
      [/\[?\(?/, /(?:)/]
    ],
    customAttrAssign: [/\)?\]?=/]
  };
}

// Customize config for test environment
function customizeForTest(config) {

  config.devtool = 'inline-source-map';

  config.stats = {
    colors: true,
    reasons: true
  };

  // Saas config
  config.module.loaders.push({
    test: /main\.scss$/,
    loader: 'style!css!sass'
  });

  config.module.loaders.push({
    test: /\.scss$/,
    loader: 'raw!sass',
    exclude: [
      fullPathTo('../src/main/frontend/scss/main.scss')
    ]
  });

  config.module.postLoaders = [
    // instrument only testing sources with Istanbul
    {
      test: /\.(js|ts)$/,
      include: fullPathTo('../src/main/frontend'),
      loader: 'istanbul-instrumenter-loader',
      exclude: [
        /\.(e2e|spec)\.ts$/,
        /node_modules/
      ]
    }
  ];

}

function customWebpackConfigValidation(config) {
  var customSchema = Joi.object({
    // this would just allow the property and doesn't perform any additional validation
    sassLoader: Joi.any(),
    htmlLoader: Joi.any()
  });

  return validateWebpackConfig(config, {schemaExtension: customSchema});
}

// Create webpack config of given type
function createConfig(environment) {

  process.env.NODE_ENV = process.env.ENV = environment;

  var config = baseWebpackConfig;

  // static data for index.html
  config.metadata = {
    baseUrl: '/',
    ENV: environment
  };

  config.plugins.push(new DefinePlugin({
    'ENV': JSON.stringify(environment),
    'HMR': (ENV.DEV === environment)
  }));

  switch (environment) {
    case ENV.DEV:
      customizeForDev(config);
      break;
    case ENV.PROD:
      customizeForProd(config);
      break;
    case ENV.TEST:
      customizeForTest(config);
      break;
  }

  return customWebpackConfigValidation(config);
}

exports.createConfig = createConfig;
