import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

console.log('`Login` component loaded asynchronously');

@Component({
  selector: 'login',
  styles: [require('./login.component.scss')],
  template: require('./login.component.html')
})
export class Login implements OnInit {

  username = 'admin';
  password = 'xxxxxx';

  constructor(public authService: AuthService, public router: Router) {
  }

  logMeIn() {
    console.log('LogMeIn');
    this.authService.authenticate();
    this.router.navigate(['/about']);
  }

  ngOnInit():any {
    console.log('hello `Login` component');
  }

}
