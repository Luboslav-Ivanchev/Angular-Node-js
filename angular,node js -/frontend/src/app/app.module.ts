import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar-Footer/navbar/navbar.component';
import { FooterComponent } from './Navbar-Footer/footer/footer.component';
import { RegisterComponent } from './Forms/register/register.component';
import { LoginComponent } from './Forms/login/login.component';
import { ChangePasswordComponent } from './Forms/change-password/change-password.component';
import { ResetPasswordComponent } from './Forms/reset-password/reset-password.component';
import { MyProfileComponent } from './Forms/my-profile/my-profile.component';
import { ContactComponent } from './Forms/contact/contact.component';
import { CartServiceComponent } from './cart-service/cart-service.component';
import { HomeComponent } from './home/home.component';
import { BeerComponent } from './Menu/beer/beer.component';
import { BurgersComponent } from './Menu/burgers/burgers.component';
import { CocktailsComponent } from './Menu/cocktails/cocktails.component';
import { DesertsComponent } from './Menu/deserts/deserts.component';
import { DishesComponent } from './Menu/dishes/dishes.component';
import { NonAlcoholicComponent } from './Menu/non-alcoholic/non-alcoholic.component';
import { PastaComponent } from './Menu/pasta/pasta.component';
import { PizzaComponent } from './Menu/pizza/pizza.component';
import { SalatsComponent } from './Menu/salats/salats.component';
import { SushiComponent } from './Menu/sushi/sushi.component';
import { WhiskeyComponent } from './Menu/whiskey/whiskey.component';
import { WinesComponent } from './Menu/wines/wines.component';
import { LiquidsComponent } from './Menu/liquids/liquids.component';
import { SushiIdComponent } from './MenuId/sushi-id/sushi-id.component';
import { BurgerIdComponent } from './MenuId/burger-id/burger-id.component';
import { PizzaIdComponent } from './MenuId/pizza-id/pizza-id.component';
import { SaladIdComponent } from './MenuId/salad-id/salad-id.component';
import { DesertIdComponent } from './MenuId/desert-id/desert-id.component';
import { PastaIdComponent } from './MenuId/pasta-id/pasta-id.component';
import { DishIdComponent } from './MenuId/dish-id/dish-id.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    MyProfileComponent,
    ContactComponent,
    CartServiceComponent,
    HomeComponent,
    BeerComponent,
    BurgersComponent,
    CocktailsComponent,
    DesertsComponent,
    DishesComponent,
    NonAlcoholicComponent,
    PastaComponent,
    PizzaComponent,
    SalatsComponent,
    SushiComponent,
    WhiskeyComponent,
    WinesComponent,
    LiquidsComponent,
    SushiIdComponent,
    BurgerIdComponent,
    PizzaIdComponent,
    SaladIdComponent,
    DesertIdComponent,
    PastaIdComponent,
    DishIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
