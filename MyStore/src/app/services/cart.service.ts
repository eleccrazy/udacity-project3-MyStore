import { Injectable } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // A variable to store all products that are added to the cart.
  cartProductList: Product[] = [];

  constructor() {}

  // A method to get all products that are added to the cart.
  getAddedProductsFromCart(): Product[] {
    return this.cartProductList;
  }

  // A method to add a specific product to the cart
  addProductToCart(product: Product, amount: number): Product[] {
    // Get the current product from the cart.
    const check = this.cartProductList.filter((prod) => prod.id === product.id);
    // Check weather the product is already in the cart.
    if (!check.length) {
      product['amount'] = amount;
      this.cartProductList.push(product);
      alert(`${product.name} added to the cart`);
    } else {
      alert(`${product.name} is already in the cart`);
    }
    return this.cartProductList;
  }

  // A method to remove a specific product from the cart.
  removeProductFromCart(product: Product): Product[] {
    // Get the index of the product.
    const index = this.cartProductList.indexOf(product);
    // Remove the product from the cart.
    this.cartProductList.splice(index, 1);
    alert(`${product.name} removed from the cart`);
    return this.cartProductList;
  }
}
