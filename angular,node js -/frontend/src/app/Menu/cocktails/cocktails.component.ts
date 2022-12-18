import { Component, OnInit } from '@angular/core';

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  weight: any;
  price: any;
  weightNumber: any;
  priceNumber: any;

  result: any;
  res: any;


  constructor(private cartService:CargoServiceService) {
  }

  ngOnInit(): void {


  }


  alcoholic(event: any) {
    let divContainer = document.getElementsByClassName('containerCocktails')[0];
    let array = Array.from(divContainer.children);

    let w2 = array[2] as HTMLElement;

    if (w2.style.display === "none") {
      w2.style.display = "block";
    } else {
      w2.style.display = "none";
    }

    let w4 = array[4] as HTMLElement;

    if (w4.style.display === "none") {
      w4.style.display = "block";
    } else {
      w4.style.display = "none";
    }


    let w6 = array[6] as HTMLElement;

    if (w6.style.display === "none") {
      w6.style.display = "block";
    } else {
      w6.style.display = "none";
    }


    let w7 = array[8] as HTMLElement;

    if (w7.style.display === "none") {
      w7.style.display = "block";
    } else {
      w7.style.display = "none";
    }

  }


  aperitifs(event: any) {

    let divContainer = document.getElementsByClassName('containerCocktails')[0];
    let array = Array.from(divContainer.children);

    let w2 = array[0] as HTMLElement;

    if (w2.style.display === "none") {
      w2.style.display = "block";
    } else {
      w2.style.display = "none";
    }

    let w4 = array[1] as HTMLElement;

    if (w4.style.display === "none") {
      w4.style.display = "block";
    } else {
      w4.style.display = "none";
    }


    let w6 = array[3] as HTMLElement;

    if (w6.style.display === "none") {
      w6.style.display = "block";
    } else {
      w6.style.display = "none";
    }


    let w7 = array[6] as HTMLElement;

    if (w7.style.display === "none") {
      w7.style.display = "block";
    } else {
      w7.style.display = "none";
    }

  }


  cocktails(event: any) {
    event.preventDefault()
    let divNonAlcoholic = document.getElementsByClassName('Non-alcoholic')[0] as HTMLElement;
    let divBeer = document.getElementsByClassName('beer')[0] as HTMLElement;
    let divWine = document.getElementsByClassName('wine')[0] as HTMLElement;
    let divWhiskey = document.getElementsByClassName('whiskey')[0] as HTMLElement;
    let divCocktails = document.getElementsByClassName('cocktails')[0] as HTMLElement;

    divNonAlcoholic.style.display = 'none';
    divBeer.style.display = 'none';
    divWine.style.display = 'none';
    divWhiskey.style.display = 'none';
    divCocktails.style.display = 'block';
  }


  change(event: any) {
    event.preventDefault()

    let button = document.querySelectorAll('.button3');
    let inputWeight = document.getElementsByClassName('weight')[0].getAttribute('data-key');
    let inputPrice = document.getElementsByClassName('prices')[0].getAttribute('data-key');

    let arr = Array.from(button);

    //  arr.forEach(btn=>{
    //       btn.addEventListener('click',function (e) {
    //         e.preventDefault();
    //         console.log(e.currentTarget)
    //       })
    //     })

    let div = event.currentTarget.parentElement.parentElement;
    let evCurrent = event.currentTarget.getAttribute('data-key');
    let p = document.querySelectorAll('p');
    let array = Array.from(p)

    array.forEach(element => {
      let dataKey = element.getAttribute('data-key');
      if (Number(dataKey) === Number(evCurrent)) {
        this.weight = String(element.textContent).slice(9, 13);
        this.price = String(element.textContent).slice(0, 5);


        let inputsWeight = document.querySelectorAll('.weight');
        let iArr = Array.from(inputsWeight)
        iArr.forEach(input => {
          let inputValueWeight = input as HTMLInputElement;
          let dataKeyInputWeight = input.getAttribute('data-key');

          if (Number(dataKeyInputWeight) === Number(evCurrent)) {

            inputValueWeight.value = this.weight;

          }
        });


        let inputsPrice = document.querySelectorAll('.prices');
        let iP = Array.from(inputsPrice);
        iP.forEach(inputPrice => {
          let inputValuePrice = inputPrice as HTMLInputElement;
          let dataKeyInputPrice = inputPrice.getAttribute('data-key');

          if (Number(dataKeyInputPrice) === Number(evCurrent)) {
            inputValuePrice.value = this.price;
          }

        })

      }

    })


  }

  plus(event: any) {
    event.preventDefault()

    let dataKey = event.currentTarget.getAttribute('data-key');

    let weightInputs = document.querySelectorAll('.weight');
    let arrayWeight = Array.from(weightInputs);
    arrayWeight.forEach(weightI => {
      let iWeight = weightI as HTMLInputElement;

      let dataKeyInputWeight = iWeight.getAttribute('data-key');
      if (Number(dataKeyInputWeight) === Number(dataKey)) {
        this.weightNumber = iWeight.value
        this.result = Number(this.weightNumber) + Number(this.weight);

        iWeight.value = this.result;

      }
    })


    let priceInputs = document.querySelectorAll('.prices');
    let arrayPrice = Array.from(priceInputs);
    arrayPrice.forEach(iPrice => {
      let priceI = iPrice as HTMLInputElement;
      let dataKeyInputPrice = priceI.getAttribute('data-key');
      if (Number(dataKeyInputPrice) === Number(dataKey)) {
        this.priceNumber = priceI.value;
        this.res = Number(this.priceNumber) + Number(this.price);
        priceI.value = this.res
      }
    })

  }

  minus(event: any) {

    event.preventDefault();

    let dataKey = event.currentTarget.getAttribute('data-key');

    let weightInputs = document.querySelectorAll('.weight');
    let arrayWeight = Array.from(weightInputs);
    arrayWeight.forEach(weightI => {
      let iWeight = weightI as HTMLInputElement;

      let dataKeyInputWeight = iWeight.getAttribute('data-key');
      if (Number(dataKeyInputWeight) === Number(dataKey)) {
        this.weightNumber = iWeight.value
        this.result = Number(this.weightNumber) - Number(this.weight);

        iWeight.value = this.result;

      }
    })


    let priceInputs = document.querySelectorAll('.prices');
    let arrayPrice = Array.from(priceInputs);
    arrayPrice.forEach(iPrice => {
      let priceI = iPrice as HTMLInputElement;
      let dataKeyInputPrice = priceI.getAttribute('data-key');
      if (Number(dataKeyInputPrice) === Number(dataKey)) {
        this.priceNumber = priceI.value;
        this.res = Number(this.priceNumber) - Number(this.price);
        priceI.value = this.res
      }
    })


  }

  info=[
    [
      {  id: 1,img:'../../../assets/cocktails/145-bluemonday.png',headerInfo:'Blue Monday 250 ML',price:'4.99',weight:'250',
        text:''},
      {  id: 2,img:'../../../assets/cocktails/Bar-cocktails-GettyImages-121834909-58d202ba5f9b581d72377d53.jpg',
        headerInfo:'Bartenders 250 ML',price:'3.99',weight:'250',
        text:''},
      {  id: 3,img:'../../../assets/cocktails/delish-191217-sex-on-the-beach-074-portrait-pf-1-1577742796.jpg',
        headerInfo:'Sex On the beach 250 ML',price:'5.99',weight:'250',
        text:''},
      {  id: 4,img:'../../../assets/cocktails/how-to-make-layered-cocktails-fs.png',
        headerInfo:'Bird 330 ML',price:'6.39',weight:'250',
        text:''},
      {  id: 5,img:'../../../assets/cocktails/images.jpg',headerInfo:'Paloma 250 ML',price:'3.39',weight:'250',
        text:''},
      {  id: 6,img:'../../../assets/cocktails/images (1).jpg',headerInfo:'Orange 250 ML',
        price:'2.39',weight:'250',
        text:''},
      {  id: 7,img:'../../../assets/cocktails/malibu-tropic-swizzle.webp',
        headerInfo:'Tropic Swizzle 250 ML',price:'5.39',weight:'330',
        text:''},
      {  id: 8,img:'../../../assets/cocktails/malibu_watermelon_mojito_600x1000_2.webp',
        headerInfo:'Fruity Cocktails 250 ML',price:'5.39',weight:'330',
        text:''},
      {  id: 9,img:'../../../assets/cocktails/Rum-Punch-cocktail-RC-500x500.jpg',
        headerInfo:'Vodka Cocktails 330 ML',price:'6.39',weight:'330',
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
