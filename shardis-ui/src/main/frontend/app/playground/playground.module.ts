import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { HeroAppComponent } from './shared/hero-app/hero-app.component';
import { HeroDetailComponent } from './shared/hero-detail/hero-detail.component';
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
import {RouterModule} from '@angular/router';
import {routes} from './playground.routes';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HeroService} from './shared/hero.service';


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
    RouterModule.forChild(routes),
  ],
  providers: [
    HeroService
  ],
  declarations: [PlaygroundComponent, HeroAppComponent, HeroDetailComponent]
})
export class PlaygroundModule { }
