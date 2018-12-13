import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProductHomeComponent } from './products/product-home/product-home.component';

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
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }