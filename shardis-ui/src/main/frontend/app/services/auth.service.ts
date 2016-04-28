import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class AuthService {

  private authenticated:boolean = false;
  private tokenData:Oauth2TokenData = new Oauth2TokenData();
  private tokenExpirationDate:Date = null;
  private userData:any = null;

  constructor(public http:Http) {
    if (window.localStorage.getItem('tokenData')) {
      this.tokenData = JSON.parse(window.localStorage.getItem('tokenData'));
      this.authenticated = true;
      this.userData = this.decodeAccessToken(this.tokenData.access_token);
      this.tokenExpirationDate = new Date(this.userData.exp * 1000);
      if (this.tokenExpirationDate < new Date()) {
        console.log('Session timeout');
        this.logout();
      }
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
          this.authenticated = true;
          this.userData = this.decodeAccessToken(this.tokenData.access_token);
          this.tokenExpirationDate = new Date(this.userData.exp * 1000);
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

  public getTokenExpirationDate():Date {
    return this.tokenExpirationDate;
  }

  public getAuthorizationHeaders():Headers {
    var authorizationHeaders = new Headers();
    if (this.authenticated) {
      authorizationHeaders.append('Authorization', `Bearer ${this.tokenData.access_token}`);
    }
    return authorizationHeaders;
  }

  private fetchUserData() {
    this.http.get('/api/user', {headers: this.getAuthorizationHeaders()})
      .subscribe(
        data => {
          this.userData = data.json();
        },
        err => this.authenticated = false
      );
  }

  private decodeAccessToken(access_token:string) {
    return JSON.parse(window.atob(access_token.split('.')[1]));
  }
}

class Oauth2TokenData {
  access_token:string = null;
  token_type:string = null;
  expires_in:number = null;
  scope:string = null;
  jti:string = null;
  refresh_token:string = null;

  constructor() {
  }
}
