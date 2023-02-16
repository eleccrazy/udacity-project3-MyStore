import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  // Inject the ProductService dependency for getting all prdoucts.
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  addToCart(product: [Product, number]): void {
    this.cartService.addProductToCart(product[0], product[1]);
  }
}
