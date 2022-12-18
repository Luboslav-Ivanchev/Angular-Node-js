import { Component, OnInit } from '@angular/core';

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor(private cartService:CargoServiceService) { }

  info=[
    [
      {  id: 1,img:'../../../assets/pizza/fit_600_376.png',headerInfo:'Peperoni',price:'16.99',weight:'390',
        text:'Spicy pepperoni salami, mozzarella, aromatic tomato sauce and fresh basil.'},
      {  id: 2,img:'../../../assets/pizza/fit_600_376 (1).png',headerInfo:'Caprice',price:'17.99',weight: '420',
        text:'Prosciutto Cotto, fresh mushrooms, artichoke, olives, mozzarella, aromatic tomato sauce, oregano and fresh basil.'},
      {  id: 3,img:'../../../assets/pizza/fit_600_376 (2).png',headerInfo:'Margarita',price:'17.99',weight:' 440',
        text:'Mozzarella, aromatic tomato sauce, oregano and fresh basil.'},
      {  id: 4,img:'../../../assets/pizza/fit_600_376 (3).png',headerInfo:'Ventricina',price:'14.99',weight:'360',
        text:'Ventricina salami, mozzarella, aromatic tomato sauce, fresh basil.'},
      {  id: 5,img:'../../../assets/pizza/fit_600_376 (4).png',headerInfo:'Margarita Extra',price:'18.99',weight:'380',
        text:'Mozzarella, buffalo mozzarella, aromatic tomato sauce, oregano and fresh basil.'},
      {  id: 6,img:'../../../assets/pizza/fit_600_376 (5).png',headerInfo:'Specs and mascarpone',price:'15.99',weight:'450',
        text:'Bacon, mascarpone cheese, Philadelphia cheese, aromatic tomato sauce and fresh basil.'},
      {  id: 7,img:'../../../assets/pizza/fit_600_376 (6).png',headerInfo:'Quattro Di Carne',price:'19.99',weight:'470',
        text:'Tender pulled beef, Prosciutto Cotto, spicy pepperoni salami, bacon, Scamortza cheese, mozzarella, aromatic tomato sauce, mushrooms and fresh basil.'},
      {  id: 8,img:'../../../assets/pizza/fit_600_376 (7).png',headerInfo:'Carbonara',price:'13.99',weight:'350',
        text:'Topped with crisp pieces of salt bacon, tender mushrooms, plenty of gooey cheese, and finished with a perfectly cooked egg , Carbonara Pizza is the pizza recipe you didn’t know was missing from your life.'},
      {  id: 9,img:'../../../assets/pizza/fit_600_376 (8).png',headerInfo:'Vegetariana',price:'17.99',weight:'530',
        text:'Grilled vegetables, artichoke, olives, cherry tomatoes, aromatic tomato sauce, fresh basil.'},
      {  id: 10,img:'../../../assets/pizza/fit_600_376 (9).png',headerInfo:'Truffle Salami',price:'21.99',weight:'460',
        text:'The pungent taste of truffle gives this pizza a luxurious flavour, but it being a Lo-Dough pizza.'},
      {  id: 11,img:'../../../assets/pizza/fit_600_376 (10).png',headerInfo:'Primavera',price:'15.99',weight:'370',
        text:'Mozzarella, homemade tomato sauce, olives, arugula, parmesan pesto and fresh cherry tomatoes.'},
      {  id: 12,img:'../../../assets/pizza/fit_600_376 (12).png',headerInfo:'Quattro Formagi',price:'18.99',weight:'470',
        text:'Mozzarella, gorgonzola, smoked scamorza, parmesan, cream, arugula, pomegranate.'},
    ]
  ]

  urlStatement:any;

  ngOnInit(): void {
    let url=window.location.href;
    let str=`${url}`
    let urlState=str.slice(22,42)

    this.urlStatement=urlState;

  }


  buyElement(event:any){

    event.preventDefault();

    let eventName=event.currentTarget.parentElement.parentElement.children[2].textContent;

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
