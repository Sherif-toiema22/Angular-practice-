import { Component } from '@angular/core';
import { IStore } from '../../model/istore';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myStore:IStore;

  constructor(){
    this.myStore={
      name:'Sherif',
      imageUrl:'https://fakeimg.pl/300/',
      branches:['cairo','Menoufia']
    }
  }


}
