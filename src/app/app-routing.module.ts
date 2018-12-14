import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

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
      path: 'registration', component: RegistrationComponent
    },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }