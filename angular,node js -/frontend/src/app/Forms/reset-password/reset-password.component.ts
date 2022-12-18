import { Component, OnInit } from '@angular/core';

import {ServiceService} from "../../service.service";

import {FormGroup,FormControl} from "@angular/forms";
import {disableVersionCheck} from "@angular/cli/src/utilities/environment-options";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit(): void {

    let body=document.body;
    let childrenBody=body.children;
    let appRoot=childrenBody[0].children
     let html=appRoot[0];
     let b=html.children[1];
    let x=b.children;
    let appNavbar=x[0];
    let appFooter=x[3];
    appNavbar.remove()
    appFooter.remove()
  }


  resetPasswordForm=new FormGroup({
    password:new FormControl(''),
    repeatPassword:new FormControl('')
  })


  reset(event:any){


    this.service.getUser().subscribe((res:any)=>{

      res.user.forEach((object:any)=>{

        if(localStorage.getItem('emailForPassword')===object.email){

         let objectInfo={
            name:object.name,
           email:object.email,
            password:this.resetPasswordForm.value.password,
            repeatPassword:this.resetPasswordForm.value.repeatPassword,
            personalInformation: {
            userName:object.personalInformation.userName,
              phoneNumber:object.personalInformation.phoneNumber,
              addressLine: object.personalInformation.addressLine,
              city:object.personalInformation.city,
              country: object.personalInformation.country,
              postcode: object.personalInformation.postcode,
              securityQuestion: object.personalInformation.securityQuestion,
              height:object.personalInformation.height,
              weight:object.weight
          }
         }
          let id=object._id;

         let div=document.getElementsByClassName('changed')[0]as HTMLDivElement;


         this.service.updateUser(objectInfo,id).subscribe((res:any)=>{

         div.style.display='block';
         div.style.fontSize='20px';
         })

        }

      })

    })

  }

}
