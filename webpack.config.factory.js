var path = require('path');

// Webpack Plugins
var webpack = require('webpack');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
var DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var validateWebpackConfig = require('webpack-validator');

const ENV_DEV = 'development';
const ENV_PROD = 'production';
const ENV_TEST = 'test';

var baseWebpackConfig = {

  resolve: {
    extensions: ['', '.ts', '.js'],
    cache: true
  },

  cache: true,
  debug: false,

  // Other module loader config
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src/main/frontend'
  },

  // we need this due to problems with es6-shim
  node: {
    global: 'window',
    progress: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: [
          rootDir('node_modules')
        ]
      },
      {
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [
          rootDir('node_modules/rxjs')
        ]
      }
    ],
    loaders: [
      // Support Angular 2 async routes via .async.ts
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },

      // Support for *.json files.
      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      // Support for CSS as raw text
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },

      // support for .html as raw text
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [
          rootDir('src/main/frontend/index.html')
        ]
      }

    ]
  },
  plugins: [
  ]
};

function rootDir(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}


function customizeForDev(config) {

  config.metadata.host = 'localhost';
  config.metadata.port = 3000;

  config.devtool= 'source-map';

  config.entry = {
    'polyfills': './src/main/frontend/polyfills.ts',
    'main': './src/main/frontend/main.ts'
  };

  config.tslint = {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src/main/frontend'
  };

  config.output = {
    path: rootDir('src/main/resources/static/'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    publicPath: 'http://localhost:3000/'
  };

  // our Webpack Development Server config
  config.devServer = {
    port: config.metadata.port,
    host: config.metadata.host,
    contentBase: '/',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    proxy: {
      '/api/*': 'http://localhost:8080'
    }
  };

  // additional plugins
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin(true));
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'polyfills',
    filename: 'polyfills.bundle.js',
    minChunks: Infinity
  }));
  config.plugins.push(new CopyWebpackPlugin([{from: 'src/main/frontend/assets', to: 'assets'}]));
  config.plugins.push(new HtmlWebpackPlugin({template: 'src/main/frontend/index.html'}));

}


function customizeForProd(config) {
  config.resolve.cache = false;
  config.cache = false;

  config.devtool= 'source-map';

  config.entry = {
    'polyfills': './src/main/frontend/polyfills.ts',
    'main': './src/main/frontend/main.ts'
  };

  config.output = {
    path: rootDir('src/main/resources/static'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js',
    publicPath: '/'
  };

  config.tslint = {
    emitErrors: true,
    failOnHint: true,
    resourcePath: 'src/main/frontend'
  };

  // additional plugins
  config.plugins.push(new WebpackMd5Hash());
  config.plugins.push(new DedupePlugin());
  config.plugins.push(new OccurenceOrderPlugin(true));
  config.plugins.push(new CommonsChunkPlugin({
    name: 'polyfills',
    filename: 'polyfills.[chunkhash].bundle.js',
    chunks: Infinity
  }));
  config.plugins.push(new CopyWebpackPlugin([
    {
      from: 'src/main/frontend/assets',
      to: 'assets'
    }
  ]));
  config.plugins.push(new HtmlWebpackPlugin({template: 'src/main/frontend/index.html'}));
  config.plugins.push(new UglifyJsPlugin({
    // to debug prod builds uncomment //debug lines and comment //prod lines

    // beautify: true,//debug
    // mangle: false,//debug
    // dead_code: false,//debug
    // unused: false,//debug
    // deadCode: false,//debug
    // compress : { screw_ie8 : true, keep_fnames: true, drop_debugger: false, dead_code: false, unused: false, }, // debug
    // comments: true,//debug

    beautify: false,//prod
    // disable mangling because of a bug in angular2 beta.1, beta.2 and beta.3
    // TODO(mastertinner): enable mangling as soon as angular2 beta.4 is out
    // mangle: { screw_ie8 : true },//prod
    mangle: false,
    compress: {screw_ie8: true},//prod
    comments: false//prod

  }));


  config.htmlLoader = {
    minimize: true,
    removeAttributeQuotes: false,
    caseSensitive: true,
    customAttrSurround: [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
    customAttrAssign: [/\)?\]?=/]
  };
}

function customizeForTest(config) {
  config.devtool = 'inline-source-map';

  config.stats = {
    colors: true,
    reasons: true
  };

  config.module.postLoaders = [
    // instrument only testing sources with Istanbul
    {
      test: /\.(js|ts)$/,
      include: rootDir('src'),
      loader: 'istanbul-instrumenter-loader',
      exclude: [
        /\.(e2e|spec)\.ts$/,
        /node_modules/
      ]
    }
  ];

  config.module.noParse = [
    rootDir('zone.js/dist'),
    rootDir('angular2/bundles')
  ];

}

function createConfig(environment) {

  process.env.NODE_ENV = process.env.ENV = environment;

  var config = baseWebpackConfig;

  // static data for index.html
  config.metadata = {
    baseUrl: '/',
    ENV: environment
  };

  config.plugins.push(new DefinePlugin({
    // Environment helpers
    'process.env': {
      'ENV': JSON.stringify(environment),
      'NODE_ENV': JSON.stringify(environment),
      'HMR': (ENV_DEV === environment)
    }
  }));

  switch (environment) {
    case ENV_DEV:
      customizeForDev(config);
      break;
    case ENV_PROD:
      customizeForProd(config);
      break;
    case ENV_TEST:
      customizeForTest(config);
      break;
  }

  return validateWebpackConfig(config);
}

exports.createConfig = createConfig;
