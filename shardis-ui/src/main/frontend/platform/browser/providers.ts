import {provide} from '@angular/core';

// Angular 2
import {FORM_PROVIDERS} from '@angular/common';

// Angular 2 Http
import {HTTP_PROVIDERS} from '@angular/http';
// Angular 2 Router
import {ROUTER_PROVIDERS} from '@angular/router';
import {LocationStrategy} from '@angular/common/src/location/location_strategy';
import {PathLocationStrategy} from '@angular/common/src/location/path_location_strategy';
import {MATERIAL_PROVIDERS} from './material2';
// ng2-webstorage
import {NG2_WEBSTORAGE} from 'ng2-webstorage';

/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  ...ROUTER_PROVIDERS,
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
   ...MATERIAL_PROVIDERS,
  ...NG2_WEBSTORAGE,
  provide(LocationStrategy, { useClass: PathLocationStrategy as any }),
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
