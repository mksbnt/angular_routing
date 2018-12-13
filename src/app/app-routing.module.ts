import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'admin', component: AdminComponent
    },
    // {
    //   path: 'products', component ProductModule
    // }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }