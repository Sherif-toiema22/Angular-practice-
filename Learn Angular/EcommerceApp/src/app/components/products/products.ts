import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/i-product';
import { ICategory } from '../../models/i-category';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  categories: ICategory[] = [
    { id: 1, name: 'laptop ' },
    { id: 2, name: 'mobile ' },
    { id: 3, name: 'tablet' },
  ];
  selectedCatId: number = 0;
  totalPrice: number = 0;
  products: IProduct[] = [];

 constructor() {
  this.products = [
    { id: 1, name: 'laptop', price: 1000, quantity: 10, description: 'A high-performance laptop for work and play.', imageUrl: 'https://example.com/laptop.jpg' },
    { id: 2, name: 'mobile', price: 500, quantity: 20, description: 'A sleek and powerful smartphone with a stunning display.', imageUrl: 'https://example.com/mobile.jpg' },
    { id: 3, name: 'tablet', price: 800, quantity: 15, description: 'A versatile tablet for entertainment and productivity.', imageUrl: 'https://example.com/tablet.jpg' },
  ];
 }

  buyProduct(count: number, price: number) {
    this.totalPrice += +count * price;
   
  }
  change(){
    this.selectedCatId=+this.selectedCatId;
  }
}
