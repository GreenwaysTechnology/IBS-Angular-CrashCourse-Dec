import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderModule } from "./header/header.module";
import { FooterModule } from './footer/footer.module';
import { MainModule } from './main/main.module';
import { UserModule } from './user/user.module';
import { TodosModule } from './todos/todos.module';
import { DatabindingModule } from './databinding/databinding.module';
// import { HeaderComponent } from "./header/header.component";

//<bean id="h" class="com.ibs.Hello/>"

@NgModule({
  //di configuration : you have to tell to the angular that , create object of c,d,p,sub
  //declarations: [AppComponent,HeaderComponent], // components,directives,pipes(view objects)
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, FooterModule, MainModule, UserModule, TodosModule, DatabindingModule],  //sub modules
  providers: [], //services
  bootstrap: [AppComponent]

})
export class AppModule { }