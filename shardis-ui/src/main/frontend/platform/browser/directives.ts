import {provide, PLATFORM_DIRECTIVES} from '@angular/core';

// Angular 2 Router
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FOUNDATION_COMPONENTS} from '../../app/components/foundation/accordion/foundation-components';

// platform common directives
import {RouterActive} from './router-active';

// application_directives: directives that are global through out the application
export const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES,
  ...FOUNDATION_COMPONENTS,
  RouterActive
];

export const DIRECTIVES = [
  provide(PLATFORM_DIRECTIVES, {useValue: APPLICATION_DIRECTIVES, multi: true})
];
