import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./Navbar-Footer/navbar/navbar.component";
import {FooterComponent} from "./Navbar-Footer/footer/footer.component";
import {ChangePasswordComponent} from "./Forms/change-password/change-password.component";
import {ContactComponent} from "./Forms/contact/contact.component";
import {LoginComponent} from "./Forms/login/login.component";
import {MyProfileComponent} from "./Forms/my-profile/my-profile.component";
import {RegisterComponent} from "./Forms/register/register.component";
import {ResetPasswordComponent} from "./Forms/reset-password/reset-password.component";
import {CartServiceComponent} from "./cart-service/cart-service.component";
import {HomeComponent} from "./home/home.component";
import {SushiComponent} from "./Menu/sushi/sushi.component";
import {DishesComponent} from "./Menu/dishes/dishes.component";
import {PizzaComponent} from "./Menu/pizza/pizza.component";
import {BurgersComponent} from "./Menu/burgers/burgers.component";
import {SalatsComponent} from "./Menu/salats/salats.component";
import {DesertsComponent} from "./Menu/deserts/deserts.component";
import {LiquidsComponent} from "./Menu/liquids/liquids.component";
import {PastaComponent} from "./Menu/pasta/pasta.component";
import {SushiIdComponent} from "./MenuId/sushi-id/sushi-id.component";
import {BurgerIdComponent} from "./MenuId/burger-id/burger-id.component";
import {PizzaIdComponent} from "./MenuId/pizza-id/pizza-id.component";
import {SaladIdComponent} from "./MenuId/salad-id/salad-id.component";
import {DesertIdComponent} from "./MenuId/desert-id/desert-id.component";
import {PastaIdComponent} from "./MenuId/pasta-id/pasta-id.component";
import {DishIdComponent} from "./MenuId/dish-id/dish-id.component";
import {NonAlcoholicComponent} from "./Menu/non-alcoholic/non-alcoholic.component";
import {BeerComponent} from "./Menu/beer/beer.component";
import {WhiskeyComponent} from "./Menu/whiskey/whiskey.component";
import {WinesComponent} from "./Menu/wines/wines.component";
import {CocktailsComponent} from "./Menu/cocktails/cocktails.component";

const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'cart-service',component:CartServiceComponent},
  {path:'home',component:HomeComponent},
  {path:'sushi',component:SushiComponent},
  {path:'dishes',component:DishesComponent},
  {path:'pizza',component:PizzaComponent},
  {path:'pasta',component:PastaComponent},
  {path:'burgers',component:BurgersComponent},
  {path:'salads',component:SalatsComponent},
  {path:'deserts',component:DesertsComponent},
  {path:'liquids',component:LiquidsComponent},

  {path:'liquids/non-alcoholic',component:NonAlcoholicComponent},
  {path:'liquids/beer',component:BeerComponent},
  {path:'liquids/whiskey',component:WhiskeyComponent},
  {path:'liquids/wine',component:WinesComponent},
  {path:'liquids/cocktails',component:CocktailsComponent},

  {path:'sushi/:id',component:SushiIdComponent},
  {path:'burger/:id',component:BurgerIdComponent},
  {path:'pizza/:id',component:PizzaIdComponent},
  {path:'menuSalads/:id',component:SaladIdComponent},
  {path:'deserts/:id',component:DesertIdComponent},
  {path:'pasta/:id',component:PastaIdComponent},
  {path:'dish/:id',component:DishIdComponent},





  {path:'LoggedInSuccessfully/my-profile',component:MyProfileComponent},
  {path:'LoggedInSuccessfully/contact',component:ContactComponent},
  {path:'LoggedInSuccessfully/cart-service',component:CartServiceComponent},
  {path:'LoggedInSuccessfully/home',component:HomeComponent},

  {path:'LoggedInSuccessfully/sushi',component:SushiComponent},
  {path:'LoggedInSuccessfully/sushi/LoggedInSuccessfully/sushi/:id',component:SushiIdComponent},

  {path:'LoggedInSuccessfully/dishes',component:DishesComponent},
  {path:'LoggedInSuccessfully/dishes/LoggedInSuccessfully/dish/:id',component:DishIdComponent},

  {path:'LoggedInSuccessfully/pizza',component:PizzaComponent},
  {path:'LoggedInSuccessfully/pizza/LoggedInSuccessfully/pizza/:id',component:PizzaIdComponent},

  {path:'LoggedInSuccessfully/pasta',component:PastaComponent},
  {path:'LoggedInSuccessfully/pasta/LoggedInSuccessfully/pasta/:id',component:PastaIdComponent},

  {path:'LoggedInSuccessfully/burgers',component:BurgersComponent},
  {path:'LoggedInSuccessfully/burgers/LoggedInSuccessfully/burger/:id',component:BurgerIdComponent},


  {path:'LoggedInSuccessfully/salads',component:SalatsComponent},
  {path:'LoggedInSuccessfully/salads/LoggedInSuccessfully/menuSalads/:id',component:SaladIdComponent},

  {path:'LoggedInSuccessfully/deserts',component:DesertsComponent},
  {path:'LoggedInSuccessfully/deserts/LoggedInSuccessfully/deserts/:id',component:DesertIdComponent},

  {path:'LoggedInSuccessfully/liquids',component:LiquidsComponent},


  {path:'LoggedInSuccessfully/liquids/non-alcoholic',component:NonAlcoholicComponent},
  {path:'LoggedInSuccessfully/liquids/beer',component:BeerComponent},
  {path:'LoggedInSuccessfully/liquids/whiskey',component:WhiskeyComponent},
  {path:'LoggedInSuccessfully/liquids/wine',component:WinesComponent},
  {path:'LoggedInSuccessfully/liquids/cocktails',component:CocktailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
