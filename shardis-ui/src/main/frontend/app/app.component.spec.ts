/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {AuthService} from './shared/auth/auth.service';
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

describe('App: ShardisUi', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
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
          component: AppComponent
        }]),
      ],
      declarations: [
        AppComponent
      ],
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as url ''https://github.com/shardis''`, () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.url).toEqual('https://github.com/shardis');
  });

  it('should render github link', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-card.footer a').textContent).toContain('by Shardis');
  });

  it('should properly log you out', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    expect(app.authService).toBeTruthy();
    expect(app.authService).toBeTruthy();

    spyOn(app.authService, 'logout');
    expect(app.authService.logout).not.toHaveBeenCalled();

    app.logMeOut();

    expect(app.authService.logout).toHaveBeenCalled();

  });


});
