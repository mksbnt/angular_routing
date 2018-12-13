import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { ProductRoutingModule } from './product-routing.module';
import { ProductHomeComponent } from './product-home/product-home.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    ProductHomeComponent
  ]
})

export class ProductModule { }