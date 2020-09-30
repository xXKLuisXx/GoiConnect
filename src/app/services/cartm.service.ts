import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Classes/product';

@Injectable({
	providedIn: 'root'
})
export class CartmService {

	/*
	data: Product[] = [
	  { id: 0, name: 'Headphones', price: 220, ciudad: 'Guadalajara, Jalisco', amount: 1 },
	  { id: 1, name: 'Headphones- Bluetooth', price: 250, ciudad: 'Zapopan, Jalisco', amount: 1 },
	  { id: 2, name: 'Bocina', price: 350, ciudad: 'Guadalajara, Jalisco', amount: 1 }
	];
  
	private cart = [];
	private cartItemCount = 0;
  
	*/

	private products: Observable<Product>;
	constructor() {
	}

	getProducts() {
		return this.products;
	}
	/*
	getProducts() {
	  return this.data;
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
	*/
}
