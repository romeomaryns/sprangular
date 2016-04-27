import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class AuthService {

  private authenticated:boolean = false;
  private tokenData:Oauth2TokenData = new Oauth2TokenData();
  private userData:any = null;

  constructor(public http:Http) {
    if (window.localStorage.getItem('tokenData')) {
      this.tokenData = JSON.parse(window.localStorage.getItem('tokenData'));
      this.authenticated = true;
      this.userData = this.fetchUserData();
    }
  }

  isAuthenticated():boolean {
    return this.authenticated;
  }

  public authenticate():void {
    console.log('Authentication pending...');

    var username = 'admin';
    var password = 'xxxxxx';


    var basicAuthHeader = btoa(`acme:acmesecret`);

    var headers = new Headers();
    headers.append('Authorization', `Basic  ${basicAuthHeader}`);
    headers.append('Accept', `application/json`);
    headers.append('Content-Type', `application/x-www-form-urlencoded`);

    var data = 'username=' + encodeURIComponent(username) + '&password='
      + encodeURIComponent(password) + '&grant_type=password';

    this.http.post('/auth/oauth/token', data, {headers: headers})
      .subscribe(
        data => {
          this.tokenData = data.json();
          window.localStorage.setItem('tokenData', JSON.stringify(this.tokenData));
          console.log(this.tokenData);
          this.authenticated = true;
          this.userData = this.fetchUserData();
        },
        err => {
          console.log(err);
        }
      );
  }

  public logout():any {
    window.localStorage.removeItem('tokenData');
    this.tokenData = new Oauth2TokenData();
    this.userData = null;
    this.authenticated = false;
  }

  public getUserData():any {
    return this.userData;
  }

  private fetchUserData() {
    var authorizationHeaders = new Headers();
    authorizationHeaders.append('Authorization', `Bearer ${this.tokenData.access_token}`);
    this.http.get('/api/user', {headers: authorizationHeaders})
      .subscribe(
        data => {
          this.userData = data.json();
        },
        err => this.authenticated = false
      );
  }

}

class Oauth2TokenData {
  access_token:string = null;
  token_type:string = null;
  expires_in:string = null;
  scope:string = null;
  jti:string = null;

  constructor() {
  }
}
