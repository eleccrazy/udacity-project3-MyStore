import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  productId!: number;
  amount: number = 1;
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  /* - Inject the ActivatedRotue dependency for getting query string param info from
       other components.
     - Inject the ProductService dependency for getting all available products.
     - Inject the CartService dependency for adding a product to the cart.
  */
  constructor(
    private activated: ActivatedRoute,
    private productSevice: ProductService,
    private cartService: CartService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {
    // Get the product id from the query string pramaters.
    this.activated.queryParamMap.subscribe((data) => {
      this.productId = Number(data.get('id'));
    });

    // Get all product info and filter the targeted product based on it's id.
    this.productSevice.getProducts().subscribe((data) => {
      for (const pro of data) {
        if (this.productId === pro.id) {
          this.product = pro;
          break;
        }
      }
    });
  }

  // A method responsible for adding products to the cart when the button is clicked.
  cartButtonClickHandler(product: Product) {
    this.cartService.addProductToCart(product, this.amount);
  }
}
