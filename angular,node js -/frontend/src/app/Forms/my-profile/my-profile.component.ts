import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from "@angular/router";

import {ServiceService} from "../../service.service";

import {FormGroup,FormControl} from "@angular/forms";
import {LoginComponent} from "../login/login.component";



@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {



  constructor(private routes:ActivatedRoute,
              private service:ServiceService,
              private router:Router) { }

  data:any;

  info:any;

  id:any;

  message:any;

  updateUserForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    repeatPassword:new FormControl(''),
    personalInformation:new FormGroup({
      userName:new FormControl(''),
      phoneNumber:new FormControl(''),
      addressLine:new FormControl(''),
      city:new FormControl(''),
      country:new FormControl(''),
      securityQuestion:new FormControl(''),
      height:new FormControl(''),
      weight:new FormControl(''),

    })
  })


  ngOnInit(): void {

    let url=window.location.href;
    let str=`${url}`
    let urlState=str.slice(22,42)
    let urlStatement=str.slice(22,53)

    this.routes.queryParams.subscribe((res:any)=>{

      this.service.getUser().subscribe((response:any)=>{

        response.user.forEach((user:any)=>{

          if(res.message===user.email){

            this.info = user;
            this.id = user._id;
          }


          if(localStorage.getItem('email')===user.email){
            this.info = user;
            this.id = user._id;
          }

        })
      })
    })




  }
  update(event:any){
    event.preventDefault()
    let divContainer=document.querySelectorAll('.container')[1]as HTMLElement;
    divContainer.style.display='block';


  }


  updating(event:any){

    let emailInput=document.getElementById('email')as HTMLInputElement;
    let emailInputValue=document.getElementById('emailId')as HTMLInputElement;

    let password=document.getElementById('pswd')as HTMLInputElement;
    let repPasswd=document.getElementById('repPswd')as HTMLInputElement;


    let emailValidation= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(this.updateUserForm.value.email?.match(emailValidation)){
      emailInput.style.borderColor='green'

             this.service.getUser().subscribe((res:any)=>{

               res.user.forEach((object:any)=>{

                 localStorage.setItem('email',object.email);
                 localStorage.setItem('name',object.name)
                 if(emailInputValue.value===object.email && password.value===repPasswd.value){

                   let data=JSON.stringify(this.updateUserForm.value)
                   this.service.updateUser(this.updateUserForm.value,this.id).subscribe((res:any)=>{


                     let div=document.getElementById('div')as HTMLDivElement;
                     div.style.display='block'
                     div.style.fontSize='20px';
                   })

                 }
               })

             })

      setTimeout(()=>{
        window.location.reload()
      }, 5000)


    }else{

      emailInput.style.borderColor='red'
      password.style.borderColor='red';
      repPasswd.style.borderColor='red';
    }

  }


  deleteProfile(event:any){
    let p=document.getElementsByClassName('delete')[0]as HTMLDivElement;
    p.style.fontSize='20px';
    p.style.display='block';


        this.service.getUser().subscribe((res:any)=>{

         res.user.forEach((obj:any)=>{

            if(obj._id===this.id){
              this.service.deleteProfiles(this.id).subscribe((res:any)=>{


             })
            }
           })
         })

    setTimeout(()=>{
       this.router.navigate(['/register'])
    }, 5000)

  }

}
