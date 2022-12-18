import { Component, OnInit } from '@angular/core';

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent implements OnInit {

  constructor(private cartService:CargoServiceService) { }


  urlStatement:any;


  ngOnInit(): void {

    let url=window.location.href;
    let str=`${url}`
    let urlState=str.slice(22,42)

    this.urlStatement=urlState;

  }

  info=[
    [{  id: 1,img:'../../../assets/pasta/fit_600_376.png',headerInfo:'Spaghetti Bolognese',price:'15.79 ',weight:'420',
      text:'Spaghetti with tomato sauce with minced beef and pork and parmesan.'},

      {  id: 2,img:'../../../assets/pasta/fit_600_376 (1).png',headerInfo:'Spaghetti how is Pepe',price:'12.49',weight:'400',
        text:'Spaghetti with Burrata mozzarella, parmesan, arugula, light sauce with butter, cream black pepper and truffle.'},

      {  id: 3,img:'../../../assets/pasta/fit_600_376 (2).png',headerInfo:'Spaghetti Frutti di mare',price:'16.99',weight:'370',
        text:'Spaghetti with squid, shrimp, salmon, cream sauce, tomatoes,garlic, fresh spices and truffle.'},

      {  id: 4,img:'../../../assets/pasta/fit_600_376 (3).png' ,headerInfo:'Spaghetti with Shrimps',price:'15.99',weight:'380',
        text:' Spaghetti with Alfredo sauce with fresh tomatoes, shrimp,basil, garlic oil and parmesan.'},

      {  id: 5,img:'../../../assets/pasta/fit_600_376 (4).png' ,headerInfo:'Spaghetti with Mushrooms',price:'14.39',weight:'350',
        text:'Spaghetti with sauce with mushrooms,mushrooms and cream, truffle oil, parsley and parmesan.'},

      {  id: 6,img:'../../../assets/pasta/fit_600_376 (5).png' ,headerInfo:'Spaghetti Carbonara',price:'13.99 ',weight:'420',
        text:'Spaghetti with cream sauce with bacon and eggs, Prosciutto Cotto and Parmesan.'},

      {  id: 7,img:'../../../assets/pasta/fit_600_376 (6).png' ,headerInfo:'Spaghetti with pumpkin and Sausage',price:'14.49 ',weight:'450',
        text:'With mushrooms, truffle and parmesan.'},

      {  id: 8,img:'../../../assets/pasta/fit_600_376 (7).png' ,headerInfo:'Spaghetti with Crispy chicken',price:'16.49 ',weight:'390',
        text:'Spaghetti with crispy chicken, cream sauce,sauteed spinach, sun-dried tomatoes, parmesan, green onions and parsley.'},



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
