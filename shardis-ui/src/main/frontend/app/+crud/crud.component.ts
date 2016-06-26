import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth/auth.service';
import {Http} from '@angular/http';

console.log('`Crud` component loaded asynchronously');

@Component({
  selector: 'crud',
  styles: [require('./crud.component.scss')],
  template: require('./crud.component.html')
})
export class Crud implements OnInit {

  posts:any[] = [];

  constructor(public http:Http, public authService:AuthService) {
  }


  ngOnInit():any {
    console.log('hello `Crud` component');
    this.fetchPosts();
  }

  private fetchPosts() {
    this.http.get('/api/posts/', {headers: this.authService.getAuthorizationHeaders()})
      .subscribe(
        data => {
          this.posts = data.json();
        },
        err => console.log('Something went wrong')
      );
  }

}

interface BlogPost {
  id:number;
  title:string;
  content:string;
  createdDate:Date;
  updatedDate:Date;
  version:number;
  createdBy:any;
  updatedBy:any;
}
