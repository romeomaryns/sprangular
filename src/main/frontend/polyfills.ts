// Polyfills
import 'es6-shim';
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)
import 'es6-promise';
import 'es7-reflect-metadata';

// RxJS
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');


if ('production' === process.env.ENV) {
  // Production
  // Zone.js
  require('zone.js/dist/zone-microtask.min');
} else {
  // Development

  Error['stackTraceLimit'] = Infinity;

  require('zone.js/dist/zone-microtask');
  require('zone.js/dist/long-stack-trace-zone');

}

// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
