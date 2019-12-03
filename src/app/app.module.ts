import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeCookComponent } from './home-cook/home-cook.component';
import { CartComponent } from './cart/cart.component';
import { IndianComponent } from './indian/indian.component';
import { ChineseComponent } from './chinese/chinese.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodselectComponent } from './foodselect/foodselect.component';
import { AddCatererComponent } from './add-caterer/add-caterer.component';
import { AddCookComponent } from './add-cook/add-cook.component';
import { UsercartComponent } from './usercart/usercart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomengoComponent } from './homengo/homengo.component';
import { ShowCookComponent } from './show-cook/show-cook.component';
import { CartngoComponent } from './cartngo/cartngo.component';
import { ShowFoodieComponent } from './showfoodie/showfoodie.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HomeCookComponent,
    CartComponent,
    IndianComponent,
    ChineseComponent,
    FoodselectComponent,
    AddCatererComponent,
    AddCookComponent,
    UsercartComponent,
    HeaderComponent,
    FooterComponent,
    HomengoComponent,
    ShowCookComponent,
    CartngoComponent,
    ShowFoodieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
