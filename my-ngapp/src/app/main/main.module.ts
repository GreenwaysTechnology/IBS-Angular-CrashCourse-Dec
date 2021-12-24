import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { UserModule } from '../user/user.module';
import { TodosModule } from '../todos/todos.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,UserModule,TodosModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
