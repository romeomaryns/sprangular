import {Component, OnInit} from '@angular/core';
import {AuthService} from './shared/auth/auth.service';
import {Router} from '@angular/router';
import {APP_MENU, AppMenuItem} from './app.menu';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public name: String = 'Sprangular';
  public url: String = 'https://github.com/romeomaryns/sprangular';
  public loading: boolean = false;

  views: AppMenuItem[] = APP_MENU;

  constructor(public authService: AuthService, public router: Router) {
  }

  logMeOut(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  ngOnInit(): any {
    console.log('app on init');
  }

}
