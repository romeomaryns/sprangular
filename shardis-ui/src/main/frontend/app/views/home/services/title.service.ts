import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {AuthService} from '../../../services/auth.service';

@Injectable()
export class Title {
  value = 'Angular 2';

  constructor(public http:Http, public authService:AuthService) {
  }

  getData() {
    console.log('Title.getData()');

    return this
      .http
      .get('/api/title', {headers: this.authService.getAuthorizationHeaders()})
      .map(res => res.json());
  }

}
