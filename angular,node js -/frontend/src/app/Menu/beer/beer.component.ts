import { Component, OnInit } from '@angular/core';

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {


  weight:any;
  price:any;
  weightNumber:any;
  priceNumber:any;

  result:any;
  res:any;

  constructor(private cartService:CargoServiceService) { }

  ngOnInit(): void {
  }

  info=[
    [
      {  id: 1,img:'../../../assets/beer/fit_600_376.png',headerInfo:'Non-alcoholic beer fresh apple',price:'2.49',weight:'500',
        text:''},
      {  id: 2,img:'../../../assets/beer/fit_600_376 (1).png',headerInfo:'Non-alcoholic beer fresh ',price:'3.29',weight: '500',
        text:''},
      {  id: 3,img:'../../../assets/beer/fit_600_376 (2).png',headerInfo:'Staropramen Prana',price:'3.29',weight:' 500',
        text:''},
      {  id: 4,img:'../../../assets/beer/fit_600_376 (3).png',headerInfo:'Stela Artoa',price:'2.89',weight:'500',
        text:''},
      {  id: 5,img:'../../../assets/beer/fit_600_376 (4).png',headerInfo:'Kamenitsa',price:'2.89',weight:'500',
        text:''},
      {  id: 6,img:'../../../assets/beer/fit_600_376 (5).png',headerInfo:'Bex Beer',price:'2.49',weight:'500',
        text:''},
      {  id: 7,img:'../../../assets/beer/fit_600_376 (6).png',headerInfo:'Staropramen',price:'2.79',weight:'500',
        text:''},
      {  id: 8,img:'../../../assets/beer/fit_600_376 (7).png',headerInfo:'Lefe beer',price:'3.79',weight:'330',
        text:'Topped with crisp pieces of salt bacon, tender mushrooms, plenty of gooey cheese, and finished with a perfectly cooked egg , Carbonara Pizza is the pizza recipe you didn’t know was missing from your life.'},
      {  id: 9,img:'../../../assets/beer/fit_600_376 (8).png',headerInfo:'Peroni',price:'4.39',weight:'330',
        text:'Grilled vegetables, artichoke, olives, cherry tomatoes, aromatic tomato sauce, fresh basil.'},
    ]
  ]


  fiveHundred(event:any){

    let divContainerBeer=document.getElementsByClassName('containerBeer')[0];
    console.log(divContainerBeer)
    let array=Array.from(divContainerBeer.children);
    let thr=array.splice(0,7)

    array.forEach(div=>{
      let divs=div as HTMLElement;
      if (divs.style.display === "none") {
        divs.style.display = "block";
      } else {
        divs.style.display = "none";
      }
    })



  }

  threeHundred(event:any){

    let divContainerBeer=document.getElementsByClassName('containerBeer')[0];
    console.log(divContainerBeer)
    let array=Array.from(divContainerBeer.children);
    let thr=array.splice(7,2)

    array.forEach(div=>{
      let divs=div as HTMLElement;
      if (divs.style.display === "none") {
        divs.style.display = "block";
      } else {
        divs.style.display = "none";
      }
    })


  }


  tapBeer(event:any){

    let divContainerBeer=document.getElementsByClassName('containerBeer')[0];
    console.log(divContainerBeer)
    let array=Array.from(divContainerBeer.children);
    let thr=array.splice(4,2)

    array.forEach(div=>{
      let divs=div as HTMLElement;
      if (divs.style.display === "none") {
        divs.style.display = "block";
      } else {
        divs.style.display = "none";
      }
    })

  }

  nonAlcohol(event:any){

    let divContainerBeer=document.getElementsByClassName('containerBeer')[0];
    console.log(divContainerBeer)
    let array=Array.from(divContainerBeer.children);
    let thr=array.splice(0,2)

    array.forEach(div=>{
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

    //  arr.forEach(btn=>{
    //       btn.addEventListener('click',function (e) {
    //         e.preventDefault();
    //         console.log(e.currentTarget)
    //       })
    //     })

    let div=event.currentTarget.parentElement.parentElement;
    let evCurrent = event.currentTarget.getAttribute('data-key');
    let p=document.querySelectorAll('p');
    let array=Array.from(p)

    array.forEach(element=>{
      let dataKey=element.getAttribute('data-key');
      if(Number(dataKey)===Number(evCurrent)){
        this.weight=String(element.textContent).slice(9,13)
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

  buyElement(event:any) {

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
