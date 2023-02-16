import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  // product: A variable to get the product info from the parent component.
  @Input() product: Product;
  // cartEmitter: A variable that is used to emit the event to the partent
  // component. Emittes an array of Product and number.
  @Output() productEmitter: EventEmitter<[Product, number]> =
    new EventEmitter();
  @Output() amountEmitter: EventEmitter<number> = new EventEmitter();
  amount: number = 1;
  // fixed options for select input.
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // Inject the cartService dependency for adding new product to the cart.
  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }
  ngOnInit(): void {}
  // A method responsible for emitting the product info to the parent component.
  cartButtonClickHandler(product: Product): void {
    // Emmit the selected amount and the product info to the parent component.
    this.productEmitter.emit([product, this.amount]);
  }
}
