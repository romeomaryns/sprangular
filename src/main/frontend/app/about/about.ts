import {Component} from 'angular2/core';
import {Alert, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {OnInit} from 'angular2/core';
import {Timepicker} from 'ng2-bootstrap/ng2-bootstrap';
import {CORE_DIRECTIVES} from 'angular2/common';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Ng2BootstrapConfig, Ng2BootstrapTheme} from 'ng2-bootstrap/ng2-bootstrap';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  styles: [require('./about.scss')],
  directives: [Timepicker, CORE_DIRECTIVES, FORM_DIRECTIVES, Alert],
  template: `<div>
  <li class="fa fa-star fa-6"></li>
  <span>Spring boot Angular 2 starter</span>
  <li class="fa fa-star fa-6"></li>
</div>

<div>
<timepicker [(ngModel)]="mytime" (change)="changed()"
 [hourStep]="hstep" [minuteStep]="mstep" [showMeridian]="ismeridian"></timepicker>

<pre class="alert alert-info">Time is: {{mytime}}</pre>
<pre> (note: | date:'shortTime' and date pipe currently supported only in Chrome)</pre>

<div class="row">
  <div class="col-xs-6">
    Hours step is:
    <select class="form-control" [(ngModel)]="hstep">
      <option *ngFor="#opt of options.hstep" [value]="opt">{{opt}}</option>
    </select>
  </div>
  <div class="col-xs-6">
    Minutes step is:
    <select class="form-control" [(ngModel)]="mstep">
      <option *ngFor="#opt of options.mstep" [value]="opt">{{opt}}</option>
    </select>
  </div>
</div>

<hr>

<button type="button" class="btn btn-info" (click)="toggleMode()">12H / 24H</button>
<button type="button" class="btn btn-primary" (click)="update()">Set to 14:00</button>
<button type="button" class="btn btn-danger" (click)="clear()">Clear</button>
</div>
<br/><br/>
 <alert type="info">Hello from ng2-bootstrap  {{ date.toDateString() }}</alert>
<br/><br/>
<h3>Selected BS THEME: {{selectedBStheme}}</h3>
<br/>
`
})
export class About implements OnInit {

  constructor() {
  }

  public date:Date = new Date();
  public selectedBStheme:Ng2BootstrapTheme = Ng2BootstrapConfig.theme;

  ngOnInit():any {
    console.log('hello `About` component');
  }

  private hstep:number = 1;
  private mstep:number = 15;
  private ismeridian:boolean = true;

  private mytime:Date = new Date();
  private options:any = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  private toggleMode():void {
    this.ismeridian = !this.ismeridian;
  };

  private update():void {
    let d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.mytime = d;
  };

  private changed():void {
    console.log('Time changed to: ' + this.mytime);
  };

  private clear():void {
    this.mytime = null;
  };


}
