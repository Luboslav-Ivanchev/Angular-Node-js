import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl} from "@angular/forms";

import {ServiceService} from "../../service.service";

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }


  emailForm=new FormGroup({
    email:new FormControl('')
  })

  sendToEmail(event:any){

    let emailValidation=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let div=document.getElementsByClassName('text')[0]as HTMLDivElement;

    if(this.emailForm.value.email?.match(emailValidation)){

        this.service.getUser().subscribe((res:any)=>{

          res.user.forEach((object:any)=>{

            if(this.emailForm.value.email===object.email){

              localStorage.setItem('emailForPassword',`${this.emailForm.value.email}`)

              let  templateParams = {
                user: `${this.emailForm.value.email}`,
                host: '12620116@nvna.eu',
                name: `${object.name}`,
                lastName: `${object.userName}`,
                message:`http://localhost:4200/reset-password`,
              };

              emailjs.send('service_k4d7h5i','template_dj761kj',templateParams,'KLjNClI88IvD6G47G')
                .then(function(response) {

                  div.style.display='block'
                  div.style.fontSize='20px';
                }, function(err) {
                  console.log('FAILED...', err);
                });

            }
          })

        })
    }

  }

}
