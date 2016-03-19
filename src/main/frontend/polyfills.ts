// Polyfills
import  'core-js';
require('zone.js');


if ('production' !== ENV) {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
