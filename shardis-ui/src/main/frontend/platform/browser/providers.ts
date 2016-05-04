import {provide} from '@angular/core';

// Angular 2
import {FORM_PROVIDERS} from '@angular/common';

// Angular 2 Http
import {HTTP_PROVIDERS} from '@angular/http';
// Angular 2 Router
import {ROUTER_PROVIDERS} from '@angular/router';
import {LocationStrategy} from '@angular/common/src/location/location_strategy';
import {PathLocationStrategy} from '@angular/common/src/location/path_location_strategy';


// Angular 2 Material
// import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
// const MATERIAL_PROVIDERS = [
//   MdRadioDispatcher
// ];

/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  ...ROUTER_PROVIDERS,
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  // ...MATERIAL_PROVIDERS,
  provide(LocationStrategy, { useClass: PathLocationStrategy }),
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
