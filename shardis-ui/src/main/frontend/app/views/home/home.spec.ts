import {
  it,
  inject,
  async,
  describe,
  beforeEachProviders
} from '@angular/core/testing';

import {Component, provide} from '@angular/core';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';


// Load the implementations that should be tested
import {Home} from './home.component.ts';
import {Title} from './services/title.service.ts';
import {Response} from '@angular/http';
import {ResponseOptions} from '@angular/http';
import {MockConnection} from '@angular/http/testing/mock_backend';
import {ResponseOptionsArgs} from '@angular/http';
import {AuthService} from '../../services/auth.service';

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
    Home,
    AuthService
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
