import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class Title {
  value = 'Angular 2';

  constructor(public http:Http) {
  }

  getData() {
    console.log('Title.getData()');

    return this
      .http
      .get('/api/title')
      .map(res =>  res.json());
  }

}
