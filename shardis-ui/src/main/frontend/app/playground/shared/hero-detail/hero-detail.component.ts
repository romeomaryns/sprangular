import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'shardis-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

}
