import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/i-product';

@Component({
  imports: [CommonModule],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  totalPrice: number = 0;
  products: IProduct[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        quantity: 5,
        description: 'Description of Product 1',
        imageUrl: 'https://placehold.co/600x400?text=Product+1',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 19.99,
        quantity: 3,
        description: 'Description of Product 2',
        imageUrl: 'https://placehold.co/600x400?text=Product+2',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 5.99,
        quantity: 10,
        description: 'Description of Product 3',
        imageUrl: 'https://placehold.co/600x400?text=Product+3',
    },
  ];

  buyProduct(count: number, price: number) {
    this.totalPrice += +count * price;
   
  }
}
