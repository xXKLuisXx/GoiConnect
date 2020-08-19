import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'safe'
})

export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


export interface Product {
  id: number;
  name: string;
  price: number;
  ciudad: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [
    { id: 0, name: 'user10', price: 200,  ciudad: 'Guadalajara, Jalisco', amount: 1 },
    { id: 1, name: 'userS10', price: 250, ciudad: 'Zapopan, Jalisco', amount: 1 },
    { id: 2, name: 'userS12', price: 220, ciudad: 'Tlajomulco, Jalisco', amount: 1 }
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount === 0) {
          this.cart.splice(index, 1);
        }
      }
    }

    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
