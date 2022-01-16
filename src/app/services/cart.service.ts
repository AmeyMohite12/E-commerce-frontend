import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // shopping cart array;
  cartItems: CartItem[] = [];

  // properties which we want to publish subject is a subclass of observer
  totalPrice: Subject<number> = new Subject();
  totalQuantity: Subject<number> = new Subject();

  constructor() {}

  addToCart(theCartItem: CartItem) {
    /// check if we already have the item

    let alreadyExistingInCart: boolean = false;
    let existingCartItem: CartItem = undefined;
    /// find the item based on item id

    existingCartItem = this.cartItems.find(
      (tempCartItem) => tempCartItem.id === theCartItem.id
    );
    alreadyExistingInCart = existingCartItem != undefined;

    /// check if we found it.
    if (alreadyExistingInCart) {
      existingCartItem.quanity++;
    } else {
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();
  }
  computeCartTotals() {
    let totalCartValue: number = 0;
    let totalQuantityValue: number = 0;
    for (let currentCartItem of this.cartItems) {
      totalCartValue += currentCartItem.quanity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quanity;
    }

    // publish new values
    this.totalPrice.next(totalCartValue);
    this.totalQuantity.next(totalQuantityValue);

    this.logCartData(totalCartValue, totalQuantityValue);
  }
  logCartData(totalCartValue: number, totalQuantityValue: number) {
    console.log('Contents of the cart are ');
    for (let currentCartItem of this.cartItems) {
      const subtotalPrice = currentCartItem.quanity * currentCartItem.unitPrice;
      console.log(
        `Name : ${currentCartItem.name} and total price : - ${subtotalPrice}
          and quantity : ${currentCartItem.quanity} and unit price : ${currentCartItem.unitPrice}
        `
      );
    }
    console.log(
      ` total price ${totalCartValue.toFixed(
        2
      )} , total quantity ${totalQuantityValue} `
    );
    console.log('---------------------');
  }
}
