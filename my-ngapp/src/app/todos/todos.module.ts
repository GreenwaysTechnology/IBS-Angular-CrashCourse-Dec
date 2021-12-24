import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';



@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    TodosComponent
  ],
  //providers: [TodoService]
})
export class TodosModule { }
