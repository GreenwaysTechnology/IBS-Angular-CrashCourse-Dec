import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabindingComponent } from './databinding.component';
import { HeroComponent } from './hero.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DatabindingComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    DatabindingComponent,
    HeroComponent
  ]
})
export class DatabindingModule { }
