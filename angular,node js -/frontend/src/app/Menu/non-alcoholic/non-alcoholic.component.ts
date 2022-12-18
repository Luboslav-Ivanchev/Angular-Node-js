import { Component, OnInit } from '@angular/core';

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-non-alcoholic',
  templateUrl: './non-alcoholic.component.html',
  styleUrls: ['./non-alcoholic.component.css']
})
export class NonAlcoholicComponent implements OnInit {


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
      {  id: 1,img:'../../../assets/Non-alcoholic/fit_600_376.png',headerInfo:'Lemonade with lidar',price:'3.99',weight:'500',
        text:''},
      {  id: 2,img:'../../../assets/Non-alcoholic/fit_600_376 (1).png',headerInfo:'Lemonade ',price:'4.99',weight: '500',
        text:''},
      {  id: 3,img:'../../../assets/Non-alcoholic/fit_600_376 (2).png',headerInfo:'Raspberry lemonade',price:'5.49',weight:' 500',
        text:''},
      {  id: 4,img:'../../../assets/Non-alcoholic/fit_600_376 (3).png',headerInfo:'Coca Cola',price:'1.59',weight:'330',
        text:''},
      {  id: 5,img:'../../../assets/Non-alcoholic/fit_600_376 (4).png',headerInfo:'Coca Cola Zero',price:'1.59',weight:'330',
        text:''},
      {  id: 6,img:'../../../assets/Non-alcoholic/fit_600_376 (5).png',headerInfo:'Tonic',price:'1.59',weight:'330',
        text:''},
      {  id: 7,img:'../../../assets/Non-alcoholic/fit_600_376 (6).png',headerInfo:'Fanta',price:'1.59',weight:'330',
        text:''},
      {  id: 8,img:'../../../assets/Non-alcoholic/fit_600_376 (7).png',headerInfo:'Sprite',price:'1.59',weight:'330',
        text:''},
      {  id: 9,img:'../../../assets/Non-alcoholic/fit_600_376 (8).png',headerInfo:'Fresh with oranges',price:'3.59',weight:'250',
        text:''},
      {  id: 10,img:'../../../assets/Non-alcoholic/fit_600_376 (9).png',headerInfo:'Fresh with  grapefruits',price:'3.59',weight:'250',
        text:''},
      {  id: 11,img:'../../../assets/Non-alcoholic/fit_600_376 (10).png',headerInfo:'Fresh with  grapefruits and oranges',price:'3.89',weight:'250',
        text:''},
      {  id: 12,img:'../../../assets/Non-alcoholic/fit_600_376 (11).png',headerInfo:'Мineral water upper bath',price:'1.89',weight:'500',
        text:''},
      {  id: 13,img:'../../../assets/Non-alcoholic/fit_600_376 (12).png',headerInfo:'Aqua pana mineral water',price:'1.49',weight:'500',
        text:''},
      {  id: 14,img:'../../../assets/Non-alcoholic/fit_600_376fds.png',headerInfo:'Mineral water Perie',price:'2.49',weight:'500',
        text:''},
      {  id: 15,img:'../../../assets/Non-alcoholic/fit_600_376dsfvxc.png',headerInfo:'Red Bull',price:'3.29',weight:'250',
        text:''},

    ]

  ]



  little(event:any){
    event.preventDefault()
    let eventButtonKey=event.currentTarget.getAttribute('data-key');

    let div=event.currentTarget.parentElement.children;
    let array=Array.from(div);
    let key=array[0] as HTMLElement;

    if(Number(eventButtonKey)===Number(key.getAttribute('data-key'))){
      console.log(key.textContent)
    }
  }

  large(event:any){
    event.preventDefault();

  }

  lemonades(event:any){

    let divContainer=document.getElementsByClassName('containerNonAlcoholic')[0];
    let array=Array.from(divContainer.children);
    let lemonades=array.splice(0,3)

    array.forEach(div=>{
      let divs=div as HTMLElement;
      if (divs.style.display === "none") {
        divs.style.display = "block";
      } else {
        divs.style.display = "none";
      }
    })

  }

  energy(event:any){
    let divContainer=document.getElementsByClassName('containerNonAlcoholic')[0];
    let array=Array.from(divContainer.children);
    let energy=array.splice(14,1)

    array.forEach(div=>{
      let divs=div as HTMLElement;
      if (divs.style.display === "none") {
        divs.style.display = "block";
      } else {
        divs.style.display = "none";
      }
    })

  }


  fresh(event:any){
    let divContainer=document.getElementsByClassName('containerNonAlcoholic')[0];
    let array=Array.from(divContainer.children);
    let fresh=array.splice(8,3);

    array.forEach(div=>{
      let divs=div as HTMLElement;
      if (divs.style.display === "none") {
        divs.style.display = "block";
      } else {
        divs.style.display = "none";
      }
    })


  }

  water(event:any){
    let divContainer=document.getElementsByClassName('containerNonAlcoholic')[0];
    let array=Array.from(divContainer.children);

    let water=array.splice(11,2);


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
