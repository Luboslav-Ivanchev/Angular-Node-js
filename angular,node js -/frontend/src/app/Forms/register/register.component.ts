import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, FormArrayName, FormGroupName} from "@angular/forms";

import {ServiceService} from "../../service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private database: ServiceService) {
  }

  ngOnInit(): void {

    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(1);
    };


  }
  result: any;
  resultMessage:any;

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
    personalInformation: new FormGroup({
      userName: new FormControl(''),
      addressLine: new FormControl(''),
      phoneNumber: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      securityQuestion: new FormControl(''),
      height: new FormControl(''),
      weight: new FormControl('')
    })


  })

  register(event:any){

    this.database.registerForm(this.registerForm.value).subscribe((res: any) => {
      this.result = res;

      let inputName=document.getElementById('name')as HTMLInputElement;
      let inputEmail=document.getElementById('email')as HTMLInputElement;
      let inputPassword=document.getElementById('password')as HTMLInputElement;
      let inputRepeatPassword=document.getElementById('repeatPassword')as HTMLInputElement;

      if(this.result===`Please enter all details!`){
        inputName.style.borderColor='red';
        inputEmail.style.borderColor='red';
        inputPassword.style.borderColor='red';
        inputRepeatPassword.style.borderColor='red';
      }

      if(this.result===`Your email is not valid!`){
        inputEmail.style.borderColor='red';
      }

      if(this.result===`'Password and Repeat password are not the same!`){
        inputPassword.style.borderColor='red';
        inputRepeatPassword.style.borderColor='red';
      }



      if(this.result==='User exist with this email! Enter a different email address!'){
        inputEmail.style.borderColor='red';
      }


        let p=document.getElementById('textP')as HTMLElement;
      p.textContent='You are registered!'




    })



  }


}
