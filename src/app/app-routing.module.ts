import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLocalstorageComponent } from './components/auth-localstorage/auth-localstorage.component';
import { HomeComponent } from './components/home/home.component';
import { AuthLocalstorageComponentModule } from './components/auth-localstorage/auth-localstorage.component-module';
import { HomeComponentModule } from './components/home/home.component-module';
import { AuthServiceModule } from './services/auth.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'login', component: AuthLocalstorageComponent }, { path: 'logged-in', component: HomeComponent }]), AuthLocalstorageComponentModule, HomeComponentModule, AuthServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
