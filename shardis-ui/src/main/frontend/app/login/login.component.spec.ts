/* tslint:disable:no-unused-variable */

import {TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {AuthService} from '../shared/auth/auth.service';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {
  MdInputModule,
  MdIconModule,
  MdSidenavModule,
  MdCardModule,
  MdButtonModule,
  MdCheckboxModule,
  MdCoreModule,
  MdGridListModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressCircleModule,
  MdRadioModule,
  MdSlideToggleModule,
  MdSliderModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';


describe('Component: Login', () => {

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
        AuthService
      ],
      imports: [
        BrowserModule,
        FormsModule,
        MdButtonModule.forRoot(),
        MdCardModule.forRoot(),
        MdCheckboxModule.forRoot(),
        MdCoreModule.forRoot(),
        MdGridListModule.forRoot(),
        MdIconModule.forRoot(),
        MdInputModule.forRoot(),
        MdListModule.forRoot(),
        MdMenuModule.forRoot(),
        MdProgressBarModule.forRoot(),
        MdProgressCircleModule.forRoot(),
        MdRadioModule.forRoot(),
        MdSidenavModule.forRoot(),
        MdSlideToggleModule.forRoot(),
        MdSliderModule.forRoot(),
        MdTabsModule.forRoot(),
        MdToolbarModule.forRoot(),
        MdTooltipModule.forRoot(),
        RouterTestingModule.withRoutes([{
          path: '',
          pathMatch: 'prefix',
          component: LoginComponent
        }]),
      ],
      declarations: [
        LoginComponent
      ],
    });
  });


  it('should create an instance', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    expect(fixture).toBeTruthy();
  });

  it('should log ngOnInit', () => {

    let fixture = TestBed.createComponent(LoginComponent);
    let crud = fixture.debugElement.componentInstance;
    expect(crud).toBeTruthy();

    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    crud.ngOnInit();

    expect(console.log).toHaveBeenCalled();
  });

});
