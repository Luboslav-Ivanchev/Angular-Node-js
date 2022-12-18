import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-sushi-id',
  templateUrl: './sushi-id.component.html',
  styleUrls: ['./sushi-id.component.css']
})
export class SushiIdComponent implements OnInit {

  constructor(private param:ActivatedRoute,
              private cartService:CargoServiceService) { }

  getMenuId:any;
  information:any;

  resultPrice:any;
  resultWeight:any;


  infoArr=[

      {  id: 1,img:'../../../assets/sushi/fit_600_376.png',headerInfo:'Filadelfia Chili-Laim 4 PCS',price:'6.79',weight:'95',
        text:'Crispy shrimp, Philadelphia, avocado, amaranth popcorn, Happy mayonnaise and chili-lime peanuts. Each individual' +
          ' portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},
      {  id: 2,img:'../../../assets/sushi/fit_600_376 (1).png',headerInfo:'Fire Paradise 4 PCS',price:'6.49 ',weight: '85',
        text:'Crispy shrimp, Philadelphia, cucumber, togarashi, chili mayonnaise and pistachios. ' +
          'Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},
      {  id: 3,img:'../../../assets/sushi/fit_600_376 (3).png',headerInfo:'Super Cheese Combo 16 PCS',price:'16.99',weight:'370',
        text:'Maxi Cheese 8 pcs. and Formaggio Vesuvius 8 pcs. Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},

      {  id: 4,img:'../../../assets/sushi/fit_600_376 (4).png',headerInfo:'Dragon Combo 18  PCS',price:'18.99',weight:'425',
        text:'Chicken King 6 pcs., Dragon chicken 4 pcs. and Dragon hosomaki with crab and Philadelphia 8 pcs.' +
          ' Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},

      {  id: 5,img:'../../../assets/sushi/fit_600_376 (4).png',headerInfo:'Dragon Combo 18  PCS',price:'18.99 ',weight:'425',
        text:'Chicken King 6 pcs., Dragon chicken 4 pcs. and Dragon hosomaki with crab and Philadelphia 8 pcs.' +
          ' Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},

      {  id: 6,img:'../../../assets/sushi/fit_600_376 (5).png',headerInfo:'King Kong 26 PCS',price:'29.99',weight:'570',
        text:'Philadelphia smoked salmon with crispy kadaif 8 pcs., Alaska 4 pcs., Chicken King 6 pcs.,' +
          ' Hosomaki avocado and Philadelphia 8 pcs., crab meat, tobiko and Japanese dressing.' +
          ' Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce. ' +
          'The arrangement of the sushi is illustrative - for home delivery it is delivered in a standard arrangement.'},

      {  id: 7,img:'../../../assets/sushi/fit_600_376 (6).png',headerInfo:'Truffle Chicken 8 PCS',price:'9.99 ',weight:'200',
        text:'Crispy chicken, Philadelphia, cucumbers, crispy kadaif and truffle cream. ' +
          'Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},

      {  id: 8,img:'../../../assets/sushi/fit_600_376 (7).png',headerInfo:'Fitness Chicken 8 PCS',price:'9.99 ',weight:'200',
        text:'Crispy Chicken Philly, Cucumbers, Crispy Kadaif, Rice Paper, Japanese Dressing and Tobiko.' +
          ' Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},

      {  id: 9,img:'../../../assets/sushi/fit_600_376 (8).png',headerInfo:'Krabster 8 PCS',price:'7.49 ',weight:'140',
        text:'Philadelphia cream with crab meat, crispy kadaif, tobiko, cucumber, sesame.' +
          ' Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},

      {  id: 10,img:'../../../assets/sushi/fit_600_376 withoutFish.png',headerInfo:'Salmon Combo 16 PCS',price:'32.99',weight:'510',
        text:'Ichiban 4 pcs., Calypso 4 pcs., Summer roll 4 pcs., Crispy salmon roll 4 pcs. ' +
          'Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},

      {  id: 11,img:'../../../assets/sushi/fit_600_376 withOutFish (3).png',headerInfo:'Best Seller 16 PCS',price:'28.99',weight:'430',
        text:'Crispy salmon roll 8 pcs., Philadelphia salmon 4 pcs.,' +
          ' Norwegian forest 4 pcs. Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},

      {  id: 12,img:'../../../assets/sushi/fit_600_376 withoutFish (2).png',headerInfo:'Lotus combo 12 PCS',price:'18.99',weight:'265',
        text:'California tuna and avocado 4 pcs., California crab 4 pcs. and California Red 4 pcs.' +
          ' Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},


      {  id: 13,img:'../../../assets/sushi/fit_600_376 withOutFish3.png',headerInfo:'Sexy combo 22 PCS',price:'28.99',weight:'460',
        text:'Fresh roll 6 pcs., Norwegian forest 4 pcs., Philadelphia crispy shrimp 4 pcs., Hosomaki ' +
          'smoked salmon 8 pcs. Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},

      {  id: 14,img:'../../../assets/sushi/fit_600_376 (2).png',headerInfo:'Kamikade combo 22 PCS',price:'28.99',weight:'460',
        text:'Sun Dance 6 pcs., Chicken Vesuvius 8 pcs., Club Chicken 4 pcs.,' +
          ' Philadelphia Red 4 pcs. Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},

      {  id: 15,img:'../../../assets/sushi/fit_600_376gdffgd.png',headerInfo:'  Sushi classic combo 14 PCS',price:'16.49',weight:'260',
        text:'Futomaki salmon and avocado 6 pcs., Hosomaki salmon and avocado 8 pcs.' +
          ' Each individual portion of sushi includes 5g of wasabi, 5g of ginger, 10ml of soy sauce.'},
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

    event.preventDefault();

      let inputPrice=document.getElementsByClassName('prices')[0]as HTMLInputElement;
      let inputWeight=document.getElementsByClassName('weight')[0]as HTMLInputElement;

    let eventName=event.currentTarget.parentElement.parentElement.children[0].textContent;

    event.target.textContent='Added in the cart'

    setTimeout(() => {
      event.target.textContent='Buy'
    }, 5000)

    this.infoArr.forEach((object:any)=>{

        if(eventName===object.headerInfo){

          if(inputPrice.value==='' && inputWeight.value===''){
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

              console.log(response)
            })

          }else{
            let sendCargo={
              image:object.img,
              name:object.headerInfo,
              price:inputPrice.value,
              weight:inputWeight.value,
              information:object.text,
              startedPrice:object.price,
              startedWeight:object.weight,
            }

            this.cartService.sendCargos(sendCargo).subscribe((response:any)=>{

            })

          }


        }

      })

  }

}
