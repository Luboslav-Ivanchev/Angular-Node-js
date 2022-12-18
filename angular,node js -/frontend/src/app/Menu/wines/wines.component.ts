import { Component, OnInit } from '@angular/core';

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {

  weight:any;
  price:any;
  weightNumber:any;
  priceNumber:any;

  result:any;
  res:any;


  constructor(private cartService:CargoServiceService) { }


  info=[
    [
      {  id: 1,img:'../../../assets/wines/fit_600_376.png',headerInfo:'Pinot grijo valade 750 ML',price:'18.99',weight:'750',
        text:''},
      {  id: 2,img:'../../../assets/wines/fit_600_376 (1).png',headerInfo:'Chinzano pro Syringe 750 ML ',price:'23.99',weight:'750',
        text:''},
      {  id: 3,img:'../../../assets/wines/fit_600_376 (2).png',headerInfo:'Sauvignon blanc la tunnela 750 ML',price:'43.99',weight:'750',
        text:''},
      {  id: 4,img:'../../../assets/wines/fit_600_376 (4).png',headerInfo:'Bevichisu rose from barbera  750 ML',price:'26.99',weight:'750',
        text:''},
      {  id: 5,img:'../../../assets/wines/fit_600_376 (3).png',headerInfo:'Average treviso ka vala  750 ML',price:'24.99',weight:'750',
        text:''},
      {  id: 6,img:'../../../assets/wines/fit_600_376 (5).png',headerInfo:'Skaya garganega & chardonne, san antonio estate 750ML',
        price:'41.99',weight:'750',
        text:''},
      {  id: 7,img:'../../../assets/wines/fit_600_376 (6).png',headerInfo:'Hemp secco 750 ML',price:'42.99',weight:'750',
        text:''},
      {  id: 8,img:'../../../assets/wines/fit_600_376 (7).png',headerInfo:'Bevichisu rose from barbera  750 ML',price:'26.99',weight:'750',
        text:''},
      {  id: 9,img:'../../../assets/wines/fit_600_376dfg.png',headerInfo:'Bevichisu rose from barbera 750 ML',price:'18.99',weight:'750',
        text:''},
    ]

  ]


  ngOnInit(): void {
  }

  white(event:any){
    let divContainer=document.getElementsByClassName('containerWines')[0];
    let array=Array.from(divContainer.children);

    let w1=array[1]as HTMLElement;

    if (w1.style.display === "none") {
      w1.style.display = "block";
    } else {
      w1.style.display = "none";
    }

    let w2=array[2]as HTMLElement;

    if (w2.style.display === "none") {
      w2.style.display = "block";
    } else {
      w2.style.display = "none";
    }

    let w4=array[4]as HTMLElement;

    if (w4.style.display === "none") {
      w4.style.display = "block";
    } else {
      w4.style.display = "none";
    }

    let w5=array[6]as HTMLElement;

    if (w5.style.display === "none") {
      w5.style.display = "block";
    } else {
      w5.style.display = "none";
    }


  }

  red(event:any){
    let divContainer=document.getElementsByClassName('containerWines')[0];
    let array=Array.from(divContainer.children);

    let wineWhite=[];
    wineWhite.push(array[0])
    wineWhite.push(array[3])
    wineWhite.push(array[5])
    wineWhite.push(array[7])
    wineWhite.push(array[8])

    wineWhite.forEach(div=>{
      let divs=div as HTMLElement;
      if (divs.style.display === "none") {
        divs.style.display = "block";
      } else {
        divs.style.display = "none";
      }
    })
  }




  change(event:any) {
    event.preventDefault()

    let button=document.querySelectorAll('.button3');
    let inputWeight=document.getElementsByClassName('weight')[0].getAttribute('data-key');
    let  inputPrice=document.getElementsByClassName('prices')[0].getAttribute('data-key');

    let arr=Array.from(button);


    let div=event.currentTarget.parentElement.parentElement;
    let evCurrent = event.currentTarget.getAttribute('data-key');
    let p=document.querySelectorAll('p');
    let array=Array.from(p)

    array.forEach(element=>{
      let dataKey=element.getAttribute('data-key');
      if(Number(dataKey)===Number(evCurrent)){
        this.weight=String(element.textContent).slice(11,15);
        this.price=String(element.textContent).slice(0,5);


        let inputsWeight=document.querySelectorAll('.weight');
        let iArr=Array.from(inputsWeight)
        iArr.forEach(input=>{
          let inputValueWeight=input as HTMLInputElement;
          let dataKeyInputWeight=input.getAttribute('data-key');

          if(Number(dataKeyInputWeight)===Number(evCurrent)){

            inputValueWeight.value=this.weight;

          }
        });


        let inputsPrice=document.querySelectorAll('.prices');
        let iP=Array.from(inputsPrice);
        iP.forEach(inputPrice=>{
          let inputValuePrice=inputPrice as HTMLInputElement;
          let dataKeyInputPrice=inputPrice.getAttribute('data-key');

          if(Number(dataKeyInputPrice)===Number(evCurrent)){
            inputValuePrice.value=this.price;
          }

        })

      }

    })


  }

  plus(event:any){
    event.preventDefault()

    let dataKey=event.currentTarget.getAttribute('data-key');

    let weightInputs=document.querySelectorAll('.weight');
    let arrayWeight=Array.from(weightInputs);
    arrayWeight.forEach(weightI=>{
      let iWeight=weightI as HTMLInputElement;

      let dataKeyInputWeight=iWeight.getAttribute('data-key');
      if(Number(dataKeyInputWeight)===Number(dataKey)){
        this.weightNumber=iWeight.value
        this.result=Number(this.weightNumber)+Number(this.weight);

        iWeight.value=this.result;

      }
    })


    let priceInputs=document.querySelectorAll('.prices');
    let arrayPrice=Array.from(priceInputs);
    arrayPrice.forEach(iPrice=>{
      let priceI=iPrice as  HTMLInputElement;
      let dataKeyInputPrice=priceI.getAttribute('data-key');
      if(Number(dataKeyInputPrice)===Number(dataKey)){
        this.priceNumber=priceI.value;
        this.res=Number(this.priceNumber)+Number(this.price);
        priceI.value=this.res
      }
    })

  }

  minus(event:any){

    event.preventDefault();

    let dataKey=event.currentTarget.getAttribute('data-key');

    let weightInputs=document.querySelectorAll('.weight');
    let arrayWeight=Array.from(weightInputs);
    arrayWeight.forEach(weightI=>{
      let iWeight=weightI as HTMLInputElement;

      let dataKeyInputWeight=iWeight.getAttribute('data-key');
      if(Number(dataKeyInputWeight)===Number(dataKey)){
        this.weightNumber=iWeight.value
        this.result=Number(this.weightNumber)-Number(this.weight);

        iWeight.value=this.result;

      }
    })



    let priceInputs=document.querySelectorAll('.prices');
    let arrayPrice=Array.from(priceInputs);
    arrayPrice.forEach(iPrice=>{
      let priceI=iPrice as  HTMLInputElement;
      let dataKeyInputPrice=priceI.getAttribute('data-key');
      if(Number(dataKeyInputPrice)===Number(dataKey)){
        this.priceNumber=priceI.value;
        this.res=Number(this.priceNumber)-Number(this.price);
        priceI.value=this.res
      }
    })


  }


  buyElement(event:any){

    event.preventDefault();

    let eventName = event.currentTarget.parentElement.parentElement.children[2].textContent;

    event.target.textContent = 'Added in the cart'

    setTimeout(() => {
      event.target.textContent = 'Buy'
    }, 5000)

    this.info.forEach((array: any) => {

      array.forEach((object: any) => {

        if (eventName === object.headerInfo) {
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

          })

        }

      })

    })


  }


}
