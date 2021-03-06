import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartmService } from 'src/app/services/cartm.service';
import { CartModalPage } from '../cart-modal/cart-modal.page';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
  /*
  carts = [];
  products = [];
  //cartItemCount: BehaviorSubject<number>;
  cartItemCount:number = 0;
  */

  constructor(private cartService: CartmService, private modalCtrl: ModalController){
  }
  @ViewChild('cart', {static: false, read: ElementRef}) fab: ElementRef;
  //constructor(private cartService: CartmService, private modalCtrl: ModalController) { }

  ngOnInit() {
    /*
    this.products = this.cartService.getProducts();
    this.carts = this.cartService.getCart();
    //this.cartItemCount = this.cartService.getCartItemCount();
    */
  }

  /*
  addToCart(product) {
    this.animateCSS('tada');
    this.cartService.addProduct(product);
  }

  async openCart() {
    this.animateCSS('bounceOutLeft', true);

    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      this.animateCSS('bounceInLeft');
    });
    modal.present();

  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd);
    }
    node.addEventListener('animationend', handleAnimationEnd);
  }
  */
}
