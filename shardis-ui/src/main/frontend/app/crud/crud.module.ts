import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CrudComponent} from './crud.component';
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
import {CrudRoutingModule} from './crud-routing.module';

@NgModule({
  imports: [
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
    MdTooltipModule,
    CrudRoutingModule
  ],
  declarations: [CrudComponent]
})
export class CrudModule {
}
