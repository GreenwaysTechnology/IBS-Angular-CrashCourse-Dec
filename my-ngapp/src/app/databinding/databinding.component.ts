import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [
  ]
})
export class DatabindingComponent implements OnInit {

  title: string = "Hello"
  logo: string = "favicon.ico"
  show: boolean = true
  heroName: string = "Dodge";
  counter: number = 0;
  text:string = ""
  //event listener
  onIncrement() {
    this.counter = this.counter + 1;
  }

  movies: Array<string> = ["The most Dangerous Game", "Hills Have Eye", "The Dark"]
  constructor() { }

  ngOnInit(): void {
  }

}
