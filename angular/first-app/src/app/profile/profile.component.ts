import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  name:string='ajay';
  salary:number=50;
  age:number= 25;
  status:string='coder';
  inputValue:string='Ajay Devkar'
  fruits:string[]=["apple","banana","mango","orange"]

  color:string='btn blue'
  isDisable:boolean=true

  constructor(){
    setTimeout(() => {
      this.isDisable=false;
    }, 3000);
  }

//  changeName(e:any) {

//   this.inputValue=e.target.value;
    
//   }



}
