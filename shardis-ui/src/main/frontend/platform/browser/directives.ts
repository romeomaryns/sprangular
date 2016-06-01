import {provide, PLATFORM_DIRECTIVES} from '@angular/core';

// Angular 2 Router
import {ROUTER_DIRECTIVES} from '@angular/router';
import {FOUNDATION_COMPONENTS} from '../../app/components/foundation/accordion/foundation-components';
import {MATERIAL_DIRECTIVES} from './material2';
import {RouterActive} from '../../app/directives/router-active.directive';

// application_directives: directives that are global through out the application
export const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES,
  ...FOUNDATION_COMPONENTS,
  ...MATERIAL_DIRECTIVES,
  RouterActive
];

export const DIRECTIVES = [
  provide(PLATFORM_DIRECTIVES, {useValue: APPLICATION_DIRECTIVES, multi: true})
];
