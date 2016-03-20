import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';


import {Title} from './title.service';
import {ResponseOptions} from 'angular2/http';
import {Response} from 'angular2/http';

describe('Title', () => {
  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function (backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    Title
  ]);


  it('should have http', inject([Title], (title) => {
    expect(!!title.http).toEqual(true);
  }));

  it('should get data from the server', injectAsync([Title, MockBackend], (title, backend) => {
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

    return new Promise((pass, fail) => {
      title.getData().subscribe(
        (next) => {
          expect(console.log).toHaveBeenCalled();
          expect(next).toEqual({value: 'API SERVER IS ALIVE'});
          pass();
        }, (error) => {
          fail(error);
        }
      );

    });

  }));

});
