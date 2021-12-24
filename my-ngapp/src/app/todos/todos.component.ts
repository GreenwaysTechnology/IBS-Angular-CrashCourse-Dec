import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../types/todo.type';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [
  ]
})
export class TodosComponent implements OnInit {

  //instance variable to hold todos array
  //todos: Array<any> = [];
  //instance variable to hold todos array
  //todos: Array<any> = [];
  //definite assigment operator !
  // todos!: Array<Todo>;
  todos!: Observable<Todo[]>
  loading: boolean = true;
  status: string = "loading....."
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    //intial data logic
    //  this.todos = this.todoService.findAll();
    // this.todoService.findAll((todos: any[]) => {
    //   this.loading = !this.loading;
    //   this.todos = todos
    // });
    //using promise
    // this.todoService.findAll().then((todos) => {
    //   this.todos = todos;
    //   this.loading = !this.loading;
    // })
    //using Observable
    // this.todoService.findAll().subscribe(todos => {
    //   this.todos = todos
    //   this.loading = !this.loading;
    // });
    this.todos = this.todoService.findAll();
    this.loading = !this.loading;
  }

}
