import { Component } from '@angular/core';
import { IStore } from '../../model/istore';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myStore:IStore;

  constructor(){
    this.myStore={
      name:'Sherif',
      imageUrl:'https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto',
      branches:['cairo','Menoufia']
    }
  }


}
