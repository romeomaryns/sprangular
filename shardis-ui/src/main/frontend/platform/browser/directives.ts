import {PLATFORM_DIRECTIVES} from '@angular/core';
import {MATERIAL_DIRECTIVES} from './material2';
import {ROUTER_DIRECTIVES} from '@angular/router';

// application_directives: directives that are global through out the application
export const APPLICATION_DIRECTIVES = [
  ...MATERIAL_DIRECTIVES,
  ...ROUTER_DIRECTIVES,
];

export const DIRECTIVES = [
  {
    provide: PLATFORM_DIRECTIVES,
    useValue: APPLICATION_DIRECTIVES,
    multi: true
  }
];
