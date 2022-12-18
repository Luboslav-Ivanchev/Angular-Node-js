import { Component, OnInit } from '@angular/core';

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor(private cartService:CargoServiceService) { }

  urlStatement:any;

  ngOnInit(): void {
    let url=window.location.href;
    let str=`${url}`
    let urlState=str.slice(22,42)

    this.urlStatement=urlState;

  }

  info=[
    [

      {  id: 1,img:'../../../assets/dishes/fit_600_376.png',headerInfo:'Chicken Steak With Mushrooms',price:'12,99',weight:'390',
        text:'Chicken steak with mushroom and mushroom sauce, baked potatoes with green onions.'},
      {  id: 2,img:'../../../assets/dishes/fit_600_376 (1).png',headerInfo:'Chicken China',price:'17.99',weight: '420',
        text:'Chicken leg pieces with carrots, fresh pepper, onion, garlic, green onion and mashed potatoes.'},
      {  id: 3,img:'../../../assets/dishes/fit_600_376 (2).png',headerInfo:'Crispy Chicken',price:'13.99',weight:' 400',
        text:'Chicken fillets, fries and garlic sauce.'},
      {  id: 4,img:'../../../assets/dishes/fit_600_376 (3).png',headerInfo:'Fragile Cuts',price:'14.99',weight:'390',
        text:'Tender chicken drumsticks (3 pieces), barbecued vegetables (roasted mushrooms, carrots, zucchini.'},
      {  id: 5,img:'../../../assets/dishes/fit_600_376 (4).png',headerInfo:'Patterned Place Black Pepper',price:'16.99',weight:'420',
        text:'Boneless chicken wings, mashed potatoes, creamed spinach and cheese, roasted mushrooms.'},
      {  id: 6,img:'../../../assets/dishes/fit_600_376 (5).png',headerInfo:'Meatballs',price:'15.99',weight:'450',
        text:'Veal meatballs with baked potatoes and lutenitsa.'},

      {  id: 7,img:'../../../assets/dishes/fit_600_376 (6).png',headerInfo:'Crispy Fillet White Fish From Alaska',price:'12.99',weight:'370',
        text:'Crispy Alaskan whitefish fillet, seasoned roasted potatoes, spinach salad with quinoa, garlic sauce and lemons.'},

      {  id: 8,img:'../../../assets/dishes/fit_600_376 (7).png',headerInfo:'Fish La Krem',price:'15.99',weight:'380',
        text:'White fish fillet, roasted potatoes, roasted onions, creamy Alfredo sauce with garlic, parmesan and fennel.'},

      {  id: 9,img:'../../../assets/dishes/fit_600_376 (8).png',headerInfo:'Carbonara',price:'12.99',weight:'370',
        text:'Roasted salmon fillet, barbecued vegetables roasted mushrooms, carrots, zucchini, eggplant, red pepper.'},

    ]
  ]


  buyElement(event:any){
    event.preventDefault();

    let eventName=event.currentTarget.parentElement.parentElement.children[1].textContent;

    event.target.textContent='Added in the cart'

    setTimeout(() => {
      event.target.textContent='Buy'
    }, 5000)

    this.info.forEach((array:any)=>{

      array.forEach((object:any)=>{

        if(eventName===object.headerInfo){
          let sendCargo={
            image:object.img,
            name:object.headerInfo,
            price:object.price,
            weight:object.weight,
            information:object.text,
            startedPrice:object.price,
            startedWeight:object.weight,
          }

          this.cartService.sendCargos(sendCargo).subscribe((response:any)=>{

          })

        }

      })

    })

  }


}
