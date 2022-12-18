import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-burger-id',
  templateUrl: './burger-id.component.html',
  styleUrls: ['./burger-id.component.css']
})
export class BurgerIdComponent implements OnInit {

  constructor(private param:ActivatedRoute,
              private cartService:CargoServiceService) { }

  getMenuId:any;
  infoArray:any;
  resultPrice:any;
  resultWeight:any;

  infoBurger=[
    {  id: 1,img:'../../../assets/burgers/fit_600_376.png',headerInfo:'El classico',price:'15.99',weight:'380',
      text:'Black Angus beef burger, bacon, Irish cheddar, tomato, iceberg, red onion, aioli sauce, brioche bun, fries, Hellmans ketchup.'},
    {  id: 2,img:'../../../assets/burgers/fit_600_376 (1).png',headerInfo:'Caprice burger',price:'14.49',weight: '380',
      text:'Crispy chicken fillet, brioche bun, Irish cheddar, tomato, pesto mayonnaise, soy-garlic mayonnaise, iceberg, fries and Hellmans ketchup.'},
    {  id: 3,img:'../../../assets/burgers/fit_600_376 (2).png',headerInfo:'Black angus burger',price:'15.99',weight:' 400',
      text:'Black Angus ground beef burger, Gouda cheese, Irish cheddar, bacon, sauteed onions, mushroom mayonnaise, brioche bun, fries and Hellmans ketchup.'},
    {  id: 4,img:'../../../assets/burgers/fit_600_376 (3).png',headerInfo:'Crazy me burger',price:'14.99',weight:'400',
      text:'Burger made with chopped Spanish Black Angus beef, Cheddar cheese, soy-garlic mayonnaise, sauteed onions, pickles, brioche bun, fries, Hellmans ketchup.'},
    {  id: 5,img:'../../../assets/burgers/fit_600_376 (4).png',headerInfo:'Cheeseburger',price:'14.59',weight:'380',
      text:'Beef burger, Irish cheddar, pickles, special mayonnaise, BBQ sauce, red onion, brioche bun, fries and Hellmans ketchup.'},
    {  id: 6,img:'../../../assets/burgers/fit_600_376 (5).png',headerInfo:'Mr happy',price:'15.99',weight:'390',
      text:'Black Angus beef burger with mayonnaise, Irish cheddar, soy garlic mayonnaise, caramelized onions, cow butter, brioche bun, fries and Hellmans ketchup.'},
    {  id: 7,img:'../../../assets/burgers/fit_600_376 (6).png',headerInfo:'Vegan burger',price:'13.99',weight:'360',
      text:'Vegan veggie burger made from peas, beets, onions and spices, with vegan cheddar cheese, vegan mayo, iceberg, tomato, avocado, red onion and vegan bread without butter and eggs, fries and Hellmans ketchup.'},

    {  id: 8,img:'../../../assets/burgers/fit_600_376 (7).png',headerInfo:'Wellington Stack',price:'12.99',weight:'320',
      text:'Pulled beef with caramelized onions, Irish cheddar, Philadelphia, mushroom mayo, tortilla and fries.'},

    {  id: 9,img:'../../../assets/burgers/fit_600_376 (8).png',headerInfo:'Tortilla with crispy chicken',price:'13.69',weight:'310',
      text:'Tomato tortilla, crispy chicken, iceberg, fresh pepper, mixed cheddar and cheese, "snack" sauce, "Mexico" sauce, fries and Hellmans ketchup.'},

    {  id: 10,img:'../../../assets/burgers/fit_600_376 (9).png',headerInfo:'Chicken and philadelphia quesadillas',price:'13.99',weight:'340',
      text:'Quesadilla with chicken meat, caramelized onions, Philadelphia, tomato sauce with pepper, cheddar, mozzarella, milk sauce and fries.'},

    {  id: 11,img:'../../../assets/burgers/fit_600_376 (10).png',headerInfo:'Black angus tacos',price:'15.99',weight:'370',
      text:'With chopped Black Angus beef, Irish cheddar, cheese, black pepper sauce, caramelized onions, tomato sauce, mushroom mayonnaise and fries.'},

  ]

  ngOnInit(): void {

    this.getMenuId=this.param.snapshot.paramMap.get('id')
    for(let data of this.infoBurger){

      if(data.headerInfo===this.getMenuId){
        this.infoArray=data;
      }
    }

  }

  need(event:any){
    event.preventDefault()

    let div=document.querySelectorAll<HTMLElement>('.buttonsPlusMinus')[0]

    div.style.display='block';

    let inputWeight=document.querySelectorAll('.weight');

    let array=Array.from(inputWeight);
    array.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      input.value=this.infoArray.weight;
    });

    let inputPrice=document.querySelectorAll('.prices');
    let arr=Array.from(inputPrice);
    arr.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      input.value=this.infoArray.price;
    })

  }

  plus(event:any){
    event.preventDefault();


    let inputWeight=document.querySelectorAll('.weight');

    let array=Array.from(inputWeight);
    array.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      this.resultWeight=Number(this.infoArray.weight)+Number(input.value);
      input.value=this.resultWeight;
    });

    let inputPrice=document.querySelectorAll('.prices');
    let arr=Array.from(inputPrice);
    arr.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      this.resultPrice=Number(this.infoArray.price)+Number(input.value);
      input.value=this.resultPrice;

    })

  }

  minus(event:any){
    event.preventDefault()


    let inputWeight=document.querySelectorAll('.weight');

    let array=Array.from(inputWeight);
    array.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      this.resultWeight=Number(input.value)-Number(this.infoArray.weight);
      input.value=this.resultWeight;

    });

    let inputPrice=document.querySelectorAll('.prices');
    let arr=Array.from(inputPrice);
    arr.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      this.resultPrice=Number(input.value)-Number(this.infoArray.price);
      input.value=this.resultPrice;
    })


  }

  buyElement(event:any){

    let inputPrice = document.getElementsByClassName('prices')[0] as HTMLInputElement;
    let inputWeight = document.getElementsByClassName('weight')[0] as HTMLInputElement;


    let eventName = event.currentTarget.parentElement.parentElement.children[0].textContent;

    event.target.textContent = 'Added in the cart'

    setTimeout(() => {
      event.target.textContent = 'Buy'
    }, 5000)

    this.infoBurger.forEach((object: any) => {

      if (eventName === object.headerInfo) {

        if (inputPrice.value === '' && inputWeight.value === '') {
          let sendCargo = {
            image: object.img,
            name: object.headerInfo,
            price: object.price,
            weight: object.weight,
            information: object.text,
            startedPrice: object.price,
            startedWeight: object.weight,
          }

          this.cartService.sendCargos(sendCargo).subscribe((response: any) => {

            console.log(response)
          })

        } else {
          let sendCargo = {
            image: object.img,
            name: object.headerInfo,
            price: inputPrice.value,
            weight: inputWeight.value,
            information: object.text,
            startedPrice: object.price,
            startedWeight: object.weight,
          }

          this.cartService.sendCargos(sendCargo).subscribe((response: any) => {

          })

        }


      }

    })
  }

}
