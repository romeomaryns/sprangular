import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
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
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

export const COMMON_ROOT_MODULES = [
  BrowserModule,
  FormsModule,
  HttpModule,
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
  MdTooltipModule.forRoot()
];

export const COMMON_CHILD_MODULES = [
  CommonModule,
  FormsModule,
  HttpModule,
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdCoreModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressCircleModule,
  MdRadioModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdSliderModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
];
