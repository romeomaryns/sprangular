// Ccre.js
import  'core-js';

// Zone.js
import 'zone.js/lib/browser/browser';

import 'ts-helpers';

if ('production' !== ENV) {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}

