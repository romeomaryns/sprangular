/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {TitleService} from './title.service';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../shared/auth/auth.service';

describe('Service: Title', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: function (backend, defaultOptions) {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        TitleService,
        AuthService
      ],
      imports: [
        BrowserModule,
        FormsModule
      ]
    });
  });

  it('should be created', inject([TitleService], (service: TitleService) => {
    expect(service).toBeTruthy();
  }));

});
