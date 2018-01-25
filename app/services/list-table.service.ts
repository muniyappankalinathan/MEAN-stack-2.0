import { Injectable } from '@angular/core';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
export interface Todo {
  title: string,
  body: string,
  userId: string
}

@Injectable()
export class ListTableService {
  public _getUrl = 'https://jsonplaceholder.typicode.com/posts';
  public _postUrl = 'http://jsonplaceholder.typicode.com/posts';
  // public _postUrl = 'http://dummy.restapiexample.com/api/v1/create';  
  private users: Todo[];

  constructor(private http: Http) { }

  getUsers(): Observable<any> {
    return this.http.get(this._getUrl).map(
      res => {
           this.users = res.json();
          return  this.users;
      }
    );
  }

  create(body): Observable<any> {
    return this.http.post(`${this._postUrl}`,body)
      .map(response => response.json());
  }

  update(body,id): Observable<any> {
    return this.http.put(`${this._postUrl +"/"+id}`,body)
      .map(response => response.json());
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(`${this._postUrl +"/"+id}`);  }

}
