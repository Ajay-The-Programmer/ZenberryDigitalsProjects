import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  name:string='ajay';
  salary:number=100;
  age:number= 25;
  status:string='coder';

  color:string='btn blue'
  isDisable:boolean=true

  constructor(){
    setTimeout(() => {
      this.isDisable=false;
    }, 3000);
  }



}
