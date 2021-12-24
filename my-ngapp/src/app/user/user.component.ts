import { Component, OnInit } from '@angular/core';
import { Address } from '../types/address.type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  //data :
  userName: string = "Subramanian";
  age: number = 18;
  status: boolean = true;
  address: Address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu'
  }
  skills = ['Angular','MicroServices','Reactive Programming','Java']
  constructor() { }

  ngOnInit(): void {
  }

}
