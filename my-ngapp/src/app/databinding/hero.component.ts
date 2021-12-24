import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  @Input()
  name: string = "";
  @Input()
  movies: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
