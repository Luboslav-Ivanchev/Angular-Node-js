import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-pasta-id',
  templateUrl: './pasta-id.component.html',
  styleUrls: ['./pasta-id.component.css']
})
export class PastaIdComponent implements OnInit {

  constructor(private param:ActivatedRoute,
              private cartService:CargoServiceService) { }

  getMenuId:any;
  information:any;

  resultPrice:any;
  resultWeight:any;

  infoArray:any;

  infoArr=
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


  ngOnInit(): void {

    this.getMenuId=this.param.snapshot.paramMap.get('id')
    for(let data of this.infoArr){

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

    this.infoArr.forEach((object: any) => {

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
