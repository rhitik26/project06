import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeCookComponent } from './home-cook/home-cook.component';
import { IndianComponent } from './indian/indian.component';
import { ChineseComponent } from './chinese/chinese.component';
import { AddCatererComponent } from './add-caterer/add-caterer.component';
import { AddCookComponent } from './add-cook/add-cook.component';
import { UsercartComponent } from './usercart/usercart.component';
import { HomengoComponent } from './homengo/homengo.component';
import { ShowCookComponent } from './show-cook/show-cook.component';
import { CartngoComponent } from './cartngo/cartngo.component';
import { ShowFoodieComponent } from './showfoodie/showfoodie.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'homeCook',component:HomeCookComponent},
  {path:'indian',component:IndianComponent},
  {path:'chinese',component:ChineseComponent},
  {path:'add-caterer',component:AddCatererComponent},
  {path:'homec/:cookname',component:AddCookComponent},
  {path:'usercart',component:UsercartComponent},
  {path:'homeCook/:foodiename',component:HomeCookComponent},
  {path:'homengo/:orgName',component:HomengoComponent},
  {path:'showcook/:cookname',component:ShowCookComponent},
  {path:'showfoodie/:foodieId',component:ShowFoodieComponent},

  // {path:'homengo',component:CartngoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
