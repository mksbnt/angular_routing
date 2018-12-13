import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductHomeComponent } from "./product-home/product-home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        redirectTo: "/products",
        pathMatch: "full"
      },
      {
        path: "products",
        component: ProductHomeComponent,
        children: [
          {
            path: "",
            component: ProductListComponent,
            children: [
              {
                path: ":id",
                component: ProductDetailsComponent
              },
              {
                path: "",
                component: ProductDetailsComponent
              }
            ]
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
