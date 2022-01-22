import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
    // get a handle to cart items
    this.cartItems = this.cartService.cartItems;
    console.log('here in list cart details');
    this.cartService.totalPrice.subscribe((data) => {
      this.totalPrice = data;
      console.log(`total price = ${this.totalPrice}`);
    });
    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
    this.cartService.computeCartTotals();
  }

  incrementQuantity(cartItem: CartItem) {
    this.cartService.addToCart(cartItem);
  }
  decrementQuantity(cartItem: CartItem) {
    this.cartService.decrementQuantity(cartItem);
  }

  remove(cartItem: CartItem) {
    this.cartService.remove(cartItem);
  }
}
