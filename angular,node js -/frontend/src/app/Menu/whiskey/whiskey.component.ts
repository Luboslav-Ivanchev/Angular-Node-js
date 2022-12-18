import { Component, OnInit } from '@angular/core';

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-whiskey',
  templateUrl: './whiskey.component.html',
  styleUrls: ['./whiskey.component.css']
})
export class WhiskeyComponent implements OnInit {

  weight:any;
  price:any;
  weightNumber:any;
  priceNumber:any;

  result:any;
  res:any;


  constructor(private cartService:CargoServiceService) { }

  ngOnInit(): void {
  }

  single(event:any){

    let divContainer=document.getElementsByClassName('containerWhiskey')[0];
    let array=Array.from(divContainer.children);

    let w1=array[1]as HTMLElement;

    if (w1.style.display === "none") {
      w1.style.display = "block";
    } else {
      w1.style.display = "none";
    }


    let w4=array[4]as HTMLElement;

    if (w4.style.display === "none") {
      w4.style.display = "block";
    } else {
      w4.style.display = "none";
    }



  }

  malt(event:any){
    let divContainer=document.getElementsByClassName('containerWhiskey')[0];
    let array=Array.from(divContainer.children);


    let w1=array[3]as HTMLElement;

    if (w1.style.display === "none") {
      w1.style.display = "block";
    } else {
      w1.style.display = "none";
    }


    let w4=array[5]as HTMLElement;

    if (w4.style.display === "none") {
      w4.style.display = "block";
    } else {
      w4.style.display = "none";
    }


    let w7=array[7]as HTMLElement;

    if (w7.style.display === "none") {
      w7.style.display = "block";
    } else {
      w7.style.display = "none";
    }


  }

  blended(event:any){

    let divContainer=document.getElementsByClassName('containerWhiskey')[0];
    let array=Array.from(divContainer.children);

    let w2=array[2]as HTMLElement;

    if (w2.style.display === "none") {
      w2.style.display = "block";
    } else {
      w2.style.display = "none";
    }

    let w5=array[4]as HTMLElement;

    if (w5.style.display === "none") {
      w5.style.display = "block";
    } else {
      w5.style.display = "none";
    }


    let w1=array[1]as HTMLElement;

    if (w1.style.display === "none") {
      w1.style.display = "block";
    } else {
      w1.style.display = "none";
    }

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
        this.weight=String(element.textContent).slice(11,15);
        this.price=String(element.textContent).slice(0,6);


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

  info=[
    [
      {  id: 1,img:'../../../assets/whiskey/3._Koval_Four_Grain_Single_Barrel_Whiskey.webp',headerInfo:'Koval 500 ML',
        price:'78.99',weight:'500',
        text:''},
      {  id: 2,img:'../../../assets/whiskey/1563203612-ci-johnnie-walker-black-label-22021747b4b37f02.jpg',headerInfo:'Black 750 ML',
        price:'85.99',weight: '500',
        text:''},
      {  id: 3,img:'../../../assets/whiskey/uiski-jameson-1-l-6273b65a33c74_800x800.jpeg',headerInfo:'Jameson 750 ML',
        price:'102.99',weight:' 500',
        text:''},
      {  id: 4,img:'../../../assets/whiskey/Uiski-Glenlivet-Master-Distillers-Reserve-1-l-1000x1000.jpg.webp',headerInfo:'The Glenlivet 750 ML',
        price:'75.99',weight:'750',
        text:''},
      {  id: 5,img:'../../../assets/whiskey/uiski-bowmore-islay-12-y-o--0-7-lit-62b5b2c3bee60_1280x1280.jpeg',headerInfo:'Bowmore 750 ML',
        price:'67.99',weight:'750',
        text:''},
      {  id: 6,img:'../../../assets/whiskey/top-20-whiskey-brands_internal_canadianclub.webp',headerInfo:'Banadian Blub 750 ML',
        price:'54.99',weight:'750',
        text:''},
      {  id: 7,img:'../../../assets/whiskey/jack-daniels-image_60b34d59151dd_800x800.jpeg',headerInfo:'jack Daniels 750 ML',
        price:'120.99',weight:' 750',
        text:''},
    ]

  ]

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

