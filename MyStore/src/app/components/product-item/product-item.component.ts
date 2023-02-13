import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  // product: A variable to get the product info from the parent component.
  @Input() product: Product;
  amount: number = 1;
  // fixed options for select input.
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // Inject the cartService dependency for adding new product to the cart.
  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }
  ngOnInit(): void {}
  // A method responsible for adding a product to the cart.
  cartButtonClickHandler(product: Product) {
    this.cartService.addProductToCart(product, this.amount);
  }
}
