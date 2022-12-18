import { Component, OnInit } from '@angular/core';

import {ServiceService} from "../service.service";

import {CargoServiceService} from "../cargo-service.service";
import emailjs, {init} from "@emailjs/browser";


@Component({
  selector: 'app-cart-service',
  templateUrl: './cart-service.component.html',
  styleUrls: ['./cart-service.component.css']
})
export class CartServiceComponent implements OnInit {

  constructor(private service:ServiceService,
              private cartService:CargoServiceService) { }

  urlStatement:any;

  email:any;
  name:any;
  phone:any;

  array:any;

  price:any;
  weight:any;

  inputValue:any;

  arr:any;


  total:any;


  ngOnInit(): void {

    let url=window.location.href;
    let str=`${url}`
    let urlState=str.slice(22,42)

    this.urlStatement=urlState;


    this.service.getUser().subscribe((res:any)=>{

      res.user.forEach((object:any)=>{

        if (localStorage.getItem('email')===object.email && localStorage.getItem('name')===object.name){
          this.email=object.email;
          this.name=object.name;

          this.phone=object.personalInformation.phoneNumber;


        }

      })


    });


    this.cartService.getCargos().subscribe((res:any)=>{

      this.array=res;

      const sum = res.reduce((accumulator:any, object:any) => {
        return accumulator + Number(object.price);
      }, 0);

     this.total=sum.toFixed(2);
    })



}


minus(event:any){

  let idEvent=event.currentTarget.id
  let div=document.getElementsByClassName('d-flex align-items-center');


  let arrayDiv=Array.from(div)

  arrayDiv.forEach((d:any)=>{

    if(idEvent===d.getAttribute('id')){

      let pPrice=`${d.children[0].textContent}`;
      let pWeight=`${d.children[1].textContent}`;
      let inputDiv=d.children[2].children[1]as HTMLInputElement;


      let price=Number(pPrice.substr(0,5));
      let weight=Number(pWeight.substr(0,5))


      this.cartService.getCargos().subscribe((res:any)=>{
        res.forEach((object:any)=>{
          if(idEvent===object._id){

            this.price=price-Number(object.startedPrice)
            this.weight=weight-Number(object.startedWeight)

            if(this.price===0){
              event.currentTarget.style.disabled='true';

            }

            let obj={
              image:object.image,
              name:object.name,
              price:this.price,
              weight:this.weight,
              information:object.information,
              startedPrice:object.startedPrice ,
              startedWeight:object.startedWeight
            }

            this.cartService.updateCargos(obj,object._id).subscribe((res:any)=>{
              console.log(res)
              window.location.reload()

            })

          }
        })
      })

    }

  })
}

plus(event:any){

  let idEvent=event.currentTarget.id
  let div=document.getElementsByClassName('d-flex align-items-center');


  let arrayDiv=Array.from(div)

  arrayDiv.forEach((d:any)=>{

    if(idEvent===d.getAttribute('id')){

      let pPrice=`${d.children[0].textContent}`;
      let pWeight=`${d.children[1].textContent}`;
      let inputDiv=d.children[2].children[1]as HTMLInputElement;

      let price=Number(pPrice.substr(0,5));
      let weight=Number(pWeight.substr(0,5))


      this.cartService.getCargos().subscribe((res:any)=>{
        res.forEach((object:any)=>{
          if(idEvent===object._id){

            this.price=price+Number(object.startedPrice)
              this.weight=weight+Number(object.startedWeight)


            let obj={
              image:object.image,
              name:object.name,
              price:this.price,
              weight:this.weight,
              information:object.information,
              startedPrice:object.startedPrice ,
              startedWeight:object.startedWeight
              }

            this.cartService.updateCargos(obj,object._id).subscribe((res:any)=>{
              console.log(res)
            window.location.reload()

            })

          }
        })
      })

    }

  })

  }


  deleteCargo(event:any){
    console.log(event.currentTarget.id)

    this.cartService.deleteCargos(event.currentTarget.id).subscribe((res:any)=>{

    })

  }


  buy(event:any){
    event.preventDefault();

    this.service.getUser().subscribe((res:any)=>{

      res.user.forEach((object:any)=>{


          let  templateParams = {
            user: `${object.userName}`,
            host: '12620116@nvna.eu',
            name: `${object.name}`,
            message:`Your bill:${this.total}`,
          };

          emailjs.send('service_k4d7h5i','template_dj761kj',templateParams,'KLjNClI88IvD6G47G')
            .then(function(response) {

            }, function(err) {
              console.log('FAILED...', err);
            });




          setTimeout(()=>{
            event.value='Sending!'
          },5000)




      })


    });



  }

}
