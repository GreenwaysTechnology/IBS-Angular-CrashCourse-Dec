import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { TODOS } from '../mock-data/todos.mock';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../types/todo.type';

@Injectable({
  providedIn: 'root' //di configuration
})
export class TodoService {
  constructor(private http: HttpClient) { }
  //biz logic and data -sync api
  // public findAll() {
  //   return TODOS;
  // }
  //callback; using timer
  // public findAll(callback: Function) {
  //   setTimeout(callback, 5000, TODOS);
  // }
  // public findAll(): Promise<Array<any>> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(resolve, 5000, TODOS);
  //   });
  // }
  //using rx js
  // public findAll(): Observable<Array<any>> {
  //   return of(TODOS).pipe(map(todos => todos));
  // }
  //getting data from rest api.

  public findAll(): Observable<Todo[]> {
    //api call
    const url = 'https://jsonplaceholder.typicode.com/todos'
    return this.http.get<Todo[]>(url);
  }

}
