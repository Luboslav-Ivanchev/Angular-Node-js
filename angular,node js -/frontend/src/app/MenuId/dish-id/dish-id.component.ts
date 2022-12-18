import { Component, OnInit } from '@angular/core';

import {CargoServiceService} from "../../cargo-service.service";

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dish-id',
  templateUrl: './dish-id.component.html',
  styleUrls: ['./dish-id.component.css']
})
export class DishIdComponent implements OnInit {

  constructor(private param: ActivatedRoute,
              private cartService: CargoServiceService) {
  }

  getMenuId: any;

  informations: any;

  infoArray: any;

  resultPrice: any;
  resultWeight: any;


  info =
    [

      {
        id: 1,
        img: '../../../assets/dishes/fit_600_376.png',
        headerInfo: 'Chicken Steak With Mushrooms',
        price: '12.99',
        weight: '390',
        text: 'Chicken steak with mushroom and mushroom sauce, baked potatoes with green onions.'
      },
      {
        id: 2,
        img: '../../../assets/dishes/fit_600_376 (1).png',
        headerInfo: 'Chicken China',
        price: '17.99',
        weight: '420',
        text: 'Chicken leg pieces with carrots, fresh pepper, onion, garlic, green onion and mashed potatoes.'
      },
      {
        id: 3,
        img: '../../../assets/dishes/fit_600_376 (2).png',
        headerInfo: 'Crispy Chicken',
        price: '13.99',
        weight: ' 400',
        text: 'Chicken fillets, fries and garlic sauce.'
      },
      {
        id: 4,
        img: '../../../assets/dishes/fit_600_376 (3).png',
        headerInfo: 'Fragile Cuts',
        price: '14.99',
        weight: '390',
        text: 'Tender chicken drumsticks (3 pieces), barbecued vegetables (roasted mushrooms, carrots, zucchini.'
      },
      {
        id: 5,
        img: '../../../assets/dishes/fit_600_376 (4).png',
        headerInfo: 'Patterned Place Black Pepper',
        price: '16.99',
        weight: '420',
        text: 'Boneless chicken wings, mashed potatoes, creamed spinach and cheese, roasted mushrooms.'
      },
      {
        id: 6,
        img: '../../../assets/dishes/fit_600_376 (5).png',
        headerInfo: 'Meatballs',
        price: '15.99',
        weight: '450',
        text: 'Veal meatballs with baked potatoes and lutenitsa.'
      },

      {
        id: 7,
        img: '../../../assets/dishes/fit_600_376 (6).png',
        headerInfo: 'Crispy Fillet White Fish From Alaska',
        price: '12.99',
        weight: '370',
        text: 'Crispy Alaskan whitefish fillet, seasoned roasted potatoes, spinach salad with quinoa, garlic sauce and lemons.'
      },

      {
        id: 8,
        img: '../../../assets/dishes/fit_600_376 (7).png',
        headerInfo: 'Fish La Krem',
        price: '15.99',
        weight: '380',
        text: 'White fish fillet, roasted potatoes, roasted onions, creamy Alfredo sauce with garlic, parmesan and fennel.'
      },

      {
        id: 9,
        img: '../../../assets/dishes/fit_600_376 (8).png',
        headerInfo: 'Carbonara',
        price: '12.99',
        weight: '370',
        text: 'Roasted salmon fillet, barbecued vegetables roasted mushrooms, carrots, zucchini, eggplant, red pepper.'
      },

    ]


  ngOnInit(): void {

    this.getMenuId = this.param.snapshot.paramMap.get('id')
    for (let data of this.info) {

      if (data.headerInfo === this.getMenuId) {
        this.informations = data;
      }
    }

  }


  need(event: any) {
    event.preventDefault()

    let div = document.querySelectorAll<HTMLElement>('.buttonsPlusMinus')[0]

    div.style.display = 'block';

    let inputWeight = document.querySelectorAll('.weight');

    let array = Array.from(inputWeight);
    array.forEach((i: any) => {
      let input = i as HTMLInputElement;
      input.value = this.informations.weight;
    });

    let inputPrice = document.querySelectorAll('.prices');
    let arr = Array.from(inputPrice);
    arr.forEach((i: any) => {
      let input = i as HTMLInputElement;
      input.value = this.informations.price;
    })

  }

  plus(event: any) {
    event.preventDefault();


    let inputWeight = document.querySelectorAll('.weight');

    let array = Array.from(inputWeight);
    array.forEach((i: any) => {
      let input = i as HTMLInputElement;
      this.resultWeight = Number(this.informations.weight) + Number(input.value);
      input.value = this.resultWeight;
    });

    let inputPrice = document.querySelectorAll('.prices');
    let arr = Array.from(inputPrice);
    arr.forEach((i: any) => {
      let input = i as HTMLInputElement;
      this.resultPrice = Number(this.informations.price) + Number(input.value);
      input.value = this.resultPrice;

    })

  }

  minus(event: any) {
    event.preventDefault()


    let inputWeight = document.querySelectorAll('.weight');

    let array = Array.from(inputWeight);
    array.forEach((i: any) => {
      let input = i as HTMLInputElement;
      this.resultWeight = Number(input.value) - Number(this.informations.weight);
      input.value = this.resultWeight;

    });

    let inputPrice = document.querySelectorAll('.prices');
    let arr = Array.from(inputPrice);
    arr.forEach((i: any) => {
      let input = i as HTMLInputElement;
      this.resultPrice = Number(input.value) - Number(this.informations.price);
      input.value = this.resultPrice;
    })


  }


  buyElement(event: any) {

    let inputPrice = document.getElementsByClassName('prices')[0] as HTMLInputElement;
    let inputWeight = document.getElementsByClassName('weight')[0] as HTMLInputElement;


    let eventName = event.currentTarget.parentElement.parentElement.children[0].textContent;

    event.target.textContent = 'Added in the cart'

    setTimeout(() => {
      event.target.textContent = 'Buy'
    }, 5000)

    this.info.forEach((object: any) => {

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
