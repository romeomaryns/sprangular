import {
  it,
  inject,
  async,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

// Load the implementations that should be tested
import {App} from './app.component';
import {AuthService} from './services/auth.service';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/src/http/backends/mock_backend';
import {provide} from 'angular2/core';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    App,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function (backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    AuthService,
  ]);

  it('should have a url', inject([App], (app) => {
    expect(app.url).toEqual('https://github.com/kucharzyk');
  }));

});
