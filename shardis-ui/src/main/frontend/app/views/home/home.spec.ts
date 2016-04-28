import {
  it,
  inject,
  async,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';


// Load the implementations that should be tested
import {Home} from './home.component.ts';
import {Title} from './services/title.service.ts';
import {Response} from 'angular2/http';
import {ResponseOptions} from 'angular2/http';
import {MockConnection} from 'angular2/src/http/backends/mock_backend';
import {ResponseOptionsArgs} from 'angular2/http';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function (backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),

    Title,
    Home
  ]);

  it('should have default data', inject([Home], (home) => {
    expect(home.data).toEqual({value: ''});
  }));

  it('should have a title', inject([Home], (home) => {
    expect(!!home.title).toEqual(true);
  }));

  it('should log ngOnInit', inject([Home, MockBackend], (home, backend) => {

    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    var mockedResponse = new Response(
      new ResponseOptions({
          body: '{"value":"API SERVER IS ALIVE"}'
        }
      ));

    backend.connections.subscribe(connection => {
      connection.mockRespond(mockedResponse);
    });

    home.ngOnInit();


    expect(console.log).toHaveBeenCalled();
  }));

});
