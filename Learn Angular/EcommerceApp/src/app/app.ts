import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header} from './components/header/header';
import { Footer  } from './components/footer/footer';
import { Products } from './components/products/products';


@Component({
  imports:  [Header, Footer, Products, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('EcommerceApp');
}
