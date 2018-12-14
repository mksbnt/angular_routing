import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../shared/product';
import { ProductService } from '../../shared/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(
    private router: Router,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.productService
      .getAll()
      .then(result => this.products = result);
  }

  onSelect(selected: Product) {
    this.router.navigate(['products', selected.id]);
  }
}
