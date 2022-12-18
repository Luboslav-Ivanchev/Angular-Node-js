import { Component, OnInit } from '@angular/core';

import {CargoServiceService} from "../../cargo-service.service";

@Component({
  selector: 'app-salats',
  templateUrl: './salats.component.html',
  styleUrls: ['./salats.component.css']
})
export class SalatsComponent implements OnInit {

  information:any;

  constructor(private cartService:CargoServiceService) {
  }

  infoSalads=[
    [
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
  ]

  urlStatement:any;

  ngOnInit(): void {

    for(let data of this.infoSalads){
      this.information=data
    }

    let url=window.location.href;
    let str=`${url}`
    let urlState=str.slice(22,42)

    this.urlStatement=urlState;

  }

  withoutChicken(event:any){
    let divsBox=document.getElementsByClassName('container')[0];
    let array=Array.from(divsBox.children);

    let x2=array[2]as HTMLElement;

    if (x2.style.display === "none") {
      x2.style.display = "block";
    } else {
      x2.style.display = "none";
    }


    let x6=array[6]as HTMLElement;

    if (x6.style.display === "none") {
      x6.style.display = "block";
    } else {
      x6.style.display = "none";
    }


    let x7=array[7]as HTMLElement;

    if (x7.style.display === "none") {
      x7.style.display = "block";
    } else {
      x7.style.display = "none";
    }

    let x8=array[8]as HTMLElement;

    if (x8.style.display === "none") {
      x8.style.display = "block";
    } else {
      x8.style.display = "none";
    }


    let x9=array[9]as HTMLElement;

    if (x9.style.display === "none") {
      x9.style.display = "block";
    } else {
      x9.style.display = "none";
    }

    let x10=array[10]as HTMLElement;

    if (x10.style.display === "none") {
      x10.style.display = "block";
    } else {
      x10.style.display = "none";
    }
    let x11=array[11]as HTMLElement;

    if (x11.style.display === "none") {
      x11.style.display = "block";
    } else {
      x11.style.display = "none";
    }


  }

  withOutFish(event:any){

    let divsBox=document.getElementsByClassName('container')[0];
    let array=Array.from(divsBox.children);

    let x0=array[0]as HTMLElement;
    let x5=array[5]as HTMLElement;
    let x7=array[7]as HTMLElement;

    if (x0.style.display === "none") {
      x0.style.display = "block";
    } else {
      x0.style.display = "none";
    }

    if (x5.style.display === "none") {
      x5.style.display = "block";
    } else {
      x5.style.display = "none";
    }

    if (x7.style.display === "none") {
      x7.style.display = "block";
    } else {
      x7.style.display = "none";
    }

  }

  newSalads(event:any){

    let divsBox=document.getElementsByClassName('container')[0];
    let array=Array.from(divsBox.children);

    let x3=array[3]as HTMLElement;
    let x4=array[4]as HTMLElement;
    let x1=array[1]as HTMLElement;
    let x8=array[8]as HTMLElement;
    let x13=array[13]as HTMLElement


    if (x3.style.display === "none") {
      x3.style.display = "block";
    } else {
      x3.style.display = "none";
    }

    if (x4.style.display === "none") {
      x4.style.display = "block";
    } else {
      x4.style.display = "none";
    }

    if (x1.style.display === "none") {
      x1.style.display = "block";
    } else {
      x1.style.display = "none";
    }

    if (x8.style.display === "none") {
      x8.style.display = "block";
    } else {
      x8.style.display = "none";
    }

    if (x13.style.display === "none") {
      x13.style.display = "block";
    } else {
      x13.style.display = "none";
    }


  }


buyElement(event:any){

  event.preventDefault();

  let eventName=event.currentTarget.parentElement.parentElement.children[1].textContent;

  event.target.textContent='Added in the cart'

  setTimeout(() => {
    event.target.textContent='Buy'
  }, 5000)

  this.infoSalads.forEach((array:any)=>{

    array.forEach((object:any)=>{

      if(eventName===object.headerInfo){
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

        })

      }

    })

  })


}

}
