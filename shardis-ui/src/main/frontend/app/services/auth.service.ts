import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class AuthService {

  private authenticated:boolean = false;

  private access_token:string = null;
  private token_type:string = null;
  private expires_in:string = null;
  private scope:string = null;
  private jti:string = null;

  private userData:any = null;

  constructor(public http:Http) {
    var locationHash = window.location.hash;
    if (locationHash.length) {
      this.access_token = this.getTokenParameterByName('access_token', locationHash);
      this.token_type = this.getTokenParameterByName('token_type', locationHash);
      this.expires_in = this.getTokenParameterByName('expires_in', locationHash);
      this.scope = this.getTokenParameterByName('scope', locationHash);
      this.jti = this.getTokenParameterByName('jti', locationHash);
    }
    if (this.access_token) {
      this.authenticated = true;
      this.userData = this.fetchUserData();
    }
  }

  isAuthenticated():boolean {
    return this.authenticated;
  }

  public authenticate():void {
    console.log('Authentication pending...');
    var redirectUrl = window.location.href;
    console.log(`redirect url = ${redirectUrl}`);
    var authorizationUrl = `/auth/oauth/authorize?response_type=token&client_id=acme&redirect_uri=${redirectUrl}`;
    console.log(`authorization url = ${authorizationUrl}`);
    window.location.href = authorizationUrl;
  }

  public getUserData():any {
    return this.userData;
  }

  private getTokenParameterByName(name:string, hash:string):string {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(hash.replace('#', '?'));
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  private fetchUserData() {
    var authorizationHeaders = new Headers();
    authorizationHeaders.append('Authorization', `Bearer ${this.access_token}`);
    this.http.get('/api/user', {headers: authorizationHeaders})
      .subscribe(
        data => {
          this.userData = data.json();
        },
        err => this.authenticated = false
      );
  }

}
