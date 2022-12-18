import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-salad-id',
  templateUrl: './salad-id.component.html',
  styleUrls: ['./salad-id.component.css']
})
export class SaladIdComponent implements OnInit {

  constructor(private param:ActivatedRoute,
              private cartService:CargoServiceService) { }

  getMenuSalads:any;
  infoArray:any;
  resultPrice:any;
  resultWeight:any;


  infoSalads=[
    {  id: 1,img:'../../../assets/salats/fit_600_376.png',headerInfo:'Rigoletto salad',price:'9.99',weight:'350',
      text:'Tuna fish, tomatoes, cucumbers, egg, mixed green salads, olives, Feta sauce.'},
    {  id: 2,img:'../../../assets/salats/fit_600_376 (1).png',headerInfo:'Cob salad',price:'13.49',weight: '430',
      text:'Mixed green salads, bacon, grilled chicken fillet, tomatoes, egg, red onion, dressing, parmesan, avocado and feta sauce.'},
    {  id: 3,img:'../../../assets/salats/fit_600_376 (2).png',headerInfo:'Fitnes',price:'9.69',weight:' 390',
      text:'Spinach, carrots, beets, cucumbers, cauliflower, Philadelphia mousse with fennel, pumpkin seeds, sesame, dressing.'},
    {  id: 4,img:'../../../assets/salats/fit_600_376 (3).png',headerInfo:'The avocado storm',price:'14.99',weight:'400',
      text:'Burrata, tomatoes, avocado, arugula, pesto, Maldon salt and balsamic reduction.'},
    {  id: 5,img:'../../../assets/salats/fit_600_376 (4).png',headerInfo:'Golden autumn',price:'8.99',weight:'350',
      text:'Spinach, quinoa, roasted pumpkin, pomegranate, grapes, caramelized walnuts, truffle balsamic vinaigrette, sesame.'},
    {  id: 6,img:'../../../assets/salats/fit_600_376 (5).png',headerInfo:'Corsica salad',price:'9.99',weight:'390',
      text:'Hummus, chickpeas, tomatoes, avocados, cucumbers, olives, red and green onions, parsley, olive oil.'},
    {  id: 7,img:'../../../assets/salats/fit_600_376 (6).png',headerInfo:'Grapes and cheese',price:'10.49',weight:'290',
      text:'White grapes, mixed salads and arugula, Irish cheddar, gouda, blue cheese, dried apricots, caramelized walnuts, aromatic dressing.'},
    {  id: 8,img:'../../../assets/salats/fit_600_376 (7).png',headerInfo:'Salad with quinoa and white fish',price:'12.99',weight:'320',
      text:'Pulled beef with caramelized onions, Irish cheddar, Philadelphia, mushroom mayo, tortilla and fries.'},
    {  id: 9,img:'../../../assets/salats/fit_600_376 (8).png',headerInfo:'Crispy Chicken caeser',price:'13.69',weight:'290',
      text:'Crispy chicken fillet, mixed green salads, crispy bacon, parmesan, croutons, Caesar sauce.'},
    {  id: 10,img:'../../../assets/salats/fit_600_376 (9).png',headerInfo:'Spinach with quinoa',price:'11.29',weight:'400',
      text:'Quinoa, spinach, tomatoes, roasted pepper, egg, cheese, soy-mustard dressing.'},
    {  id: 11,img:'../../../assets/salats/fit_600_376 (10).png',headerInfo:'Salad luxury',price:'12.29',weight:'370',
      text:'Two tender BBQ chicken breasts, avocado, mixed green salads, tomatoes, egg, soy-mustard dressing.'},
    {  id: 12,img:'../../../assets/salats/fit_600_376 (11).png',headerInfo:'Crispy squid caesar',price:'13.99',weight:'280',
      text:'Mixed green salads, baked bacon, crispy squid, croutons, parmesan, Caesar sauce.'},
    {  id: 13,img:'../../../assets/salats/fit_600_376 (12).png',headerInfo:'Shopska salad',price:'8.69',weight:'390',
      text:'Tomatoes, cucumbers, cheese, red onion, parsley, olive oil.'},
    {  id: 14,img:'../../../assets/salats/fit_600_376 (13).png',headerInfo:'Greek salad',price:'8.99',weight:'370',
      text:'Tomatoes, cucumbers, green and red pepper, red onion, cheese, olives, aromatic olive oil, oregano, parsley and black pepper.'},
    {  id: 15,img:'../../../assets/salats/fit_600_376 (14).png',headerInfo:'Wakame',price:'6.79',weight:'140',
      text:'Crispy seaweed with sesame.'}

  ]

  ngOnInit(): void {
    this.getMenuSalads=this.param.snapshot.paramMap.get('id');

    for(let data of this.infoSalads){

      if(data.headerInfo===this.getMenuSalads){
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

    this.infoSalads.forEach((object: any) => {

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
