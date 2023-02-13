import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  total: number = 0;
  fullName: string = '';
  creditCardNumber: string = '';
  address: string = '';
  // Inject the CartService, and Router depenecies
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    // Get all products that are added to the cart.
    this.cartProducts = this.cartService.getAddedProductsFromCart();
    // Iterate over all products.
    for (const product of this.cartProducts) {
      // Check if the product has the amount property defined to it.
      if (product.amount) {
        // Calculate the price for each product by multiplying the price with the amount of
        // the product specified by the user and add them to the total price.
        this.total += product.price * product.amount;
      }
    }
  }
  // A method that hadles remvoing individual products.
  removeFromCart(product: Product) {
    this.cartService.removeProductFromCart(product);
  }

  // A method which is responsible for calculating the total price to be paid after the user has
  // changed the amount of the individual product.
  calculateTotalPrice() {
    this.total = 0;
    for (const product of this.cartProducts) {
      if (product.amount) {
        this.total += product.price * product.amount;
      }
    }
  }

  // A method which is responsible for any change on the number input field.
  detectAmountChanges(event: any, product: Product): void {
    // if the amount of the prduct is less than 1, then the product should have to get removed
    // from the cart list.
    if (event.target.value < 1) {
      this.cartService.removeProductFromCart(product);
    }

    // Iterate over each products from the card, and add the associated amount property to the product
    for (const prod of this.cartProducts) {
      if (product.id === prod.id) {
        prod.amount = event.target.value;
      }
    }
    // Call the calculateTotalPrice method for each changes made on the amount. This will update
    // the total price dynamically for every action of the user over the amount.
    this.calculateTotalPrice();
  }

  // A method to listen for submit button in the form.
  submitCheckout() {
    // Remove all products from the cart after the checkout has been submitted.
    this.cartService.cartProductList = [];
    // Navigate to the confirmation route and pass the requried information.
    this.router.navigate([
      '/confirmation',
      { name: this.fullName, totalPrice: this.total },
    ]);
  }
}
