import {App} from './app.component';
import {AuthService} from './shared';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing/mock_backend';
import {MdInputModule} from '@angular2-material/input';
import {FormsModule} from '@angular/forms';
import {TestBed} from '@angular/core/testing/test_bed';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('App', () => {

  // let component: any;
  //
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [
  //       BaseRequestOptions,
  //       MockBackend,
  //       {
  //         provide: Http,
  //         useFactory: function (backend, defaultOptions) {
  //           return new Http(backend, defaultOptions);
  //         },
  //         deps: [MockBackend, BaseRequestOptions]
  //       },
  //       AuthService,
  //       {
  //         provide: APP_BASE_HREF,
  //         useValue: '/'
  //       }
  //     ],
  //     imports: [
  //       FormsModule,
  //       MdInputModule,
  //       RouterTestingModule,
  //       RouterModule.forRoot([])
  //     ],
  //     declarations: [
  //      App
  //     ]
  //   });
  //
  //   TestBed.overrideComponent(App, {
  //     set: {
  //       // you can override values here
  //     }
  //   });
  // });
  //
  // beforeEach(() => {
  //   let fixture = TestBed.createComponent(App);
  //   fixture.detectChanges();
  //
  //   component = fixture.componentInstance;
  // });
  //
  //
  // it('should have a url', () => {
  //   expect(component.url).toEqual('https://github.com/kucharzyk');
  // });

});
