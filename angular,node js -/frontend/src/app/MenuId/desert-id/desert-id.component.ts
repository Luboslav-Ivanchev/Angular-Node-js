import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-desert-id',
  templateUrl: './desert-id.component.html',
  styleUrls: ['./desert-id.component.css']
})
export class DesertIdComponent implements OnInit {

  constructor(private param:ActivatedRoute,
              private cartService:CargoServiceService) { }


  getMenuId:any;
  information:any;


  resultPrice:any;
  resultWeight:any;

  infoArr=[
    {  id: 1,img:'../../../assets/desserts/fit_600_376 (1).png',headerInfo:'Cream cake with pumpkin and apples',price:'7.79 ',weight:'190',
      text:'Homemade biscuit cake with philadelphia cream,pumpkin jam,apples,walnuts and cinnamon'},

      {  id: 2,img:'../../../assets/desserts/fit_600_376 (2).png',headerInfo:'Baked cheesecake with oranges and figs',price:'6.49',weight:'85',
        text:'Baked cheesecake with oranges, Philadelphia, mascarpone and ricotta, homemade fig jam'},

      {  id: 3,img:'../../../assets/desserts/fit_600_376 (3).png',headerInfo:'Homemade roast pumpkin pie',price:'16.99',weight:'370',
        text:'Homemade pie with roasted pumpkin, wrapped in milk cream and crispy caramel crust'},

      {  id: 4,img:'../../../assets/desserts/fit_600_376 (4).png' ,headerInfo:'Baked pumpkin with honey and nuts',price:'18.99',weight:'425',
        text:'Baked pumpkin with honey and nuts'},

      {  id: 5,img:'../../../assets/desserts/fit_600_376 (5).png' ,headerInfo:' Baked pumpkin with honey',price:'29.99',weight:'570',
        text:'Baked pumpkin with honey'},

      {  id: 6,img:'../../../assets/desserts/fit_600_376 (6).png' ,headerInfo:'Vegan cake bounty',price:'5.49 ',weight:'80',
        text:'Coconut cream on dried fruit cake with natural chocolate and coconut chips. Sugar-free, gluten-free, flour-free and dairy-free.'},


      {  id: 7,img:'../../../assets/desserts/fit_600_376 (7).png' ,headerInfo:'Chocolate cake with lindt',price:'4.49 ',weight:'100',
        text:'Cake of fine milk chocolate and sponge cake, sprinkled with cocoa.'},

      {  id: 8,img:'../../../assets/desserts/fit_600_376 (8).png' ,headerInfo:'Souffle with liquid Chocolate center',price:'7.49 ',weight:'100',
        text:'Souffle with a liquid center of chocolate. The product is on sale and is not subject to additional discounts.'},


      {  id: 9,img:'../../../assets/desserts/fit_600_376 (9).png' ,headerInfo:'Nutella cookie cake',price:'4.89 ',weight:'150',
        text:'Homemade cake with biscuits, mascarpone cream, sour cream and chocolate.'},


      {  id: 10,img:'../../../assets/desserts/fit_600_376 (10).png' ,headerInfo:'Creme Brulee',price:'3.89 ',weight:'150',
        text:'Sour cream with a topping of your choice.'},

      {  id: 11,img:'../../../assets/desserts/fit_600_376 (11).png' ,headerInfo:'Creme Brulee',price:'18.89 ',weight:'270',
        text:'Whipped cream. The product is on sale and is not subject to additional discounts.'},

      {  id: 12,img:'../../../assets/desserts/fit_600_376 (1)nirvane1.png' ,headerInfo:'Nirvana cookies and cream 150 ML',price:'3.89 ',weight:'150',
        text:'  Ice cream flavored with vanilla and pieces of cocoa cookies.'},

      {  id: 13,img:'../../../assets/desserts/fit_600_376 (2)nirvane3.png' ,headerInfo:'Nirvana chocolate and choco chips 150 ML',price:'3.29 ',weight:'150',
        text:'  Chocolate ice cream with chocolate chips.'},

      {  id: 14,img:'../../../assets/desserts/fit_600_376nirvana2.png' ,headerInfo:'Nirvana chocolate and choco chips 150 ML',price:'4.49 ',weight:'150',
        text:'Ice cream with caramel syrup and caramelized nuts.'},

    ]


  infoArray:any;

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
