import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from "@angular/router";

import {ServiceService} from "../../service.service";

import {  Input } from '@angular/core'

import {FormGroup,FormControl} from "@angular/forms";


import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() item = ''

  constructor(private router:Router,
        private service:ServiceService,
              private routes:ActivatedRoute) { }

  email:any;

  urlStatement:any;

  name:any;

  ngOnInit(): void {

    let url=window.location.href;
    let str=`${url}`
    let urlState=str.slice(22,42)

    this.urlStatement=urlState;


    this.routes.queryParams.subscribe((obj:any)=>{

    })


    this.service.getUser().subscribe((res:any)=>{

      res.user.forEach((object:any)=>{

        if (localStorage.getItem('email')===object.email && localStorage.getItem('name')===object.name){
        this.email=object.email;
         this.name=object.name;

        }

      })

    })


  }



  sendProblem(event:any){

  let inputs=document.querySelectorAll('input')
    let name=inputs[1]as HTMLInputElement;
  let email=inputs[2]as HTMLInputElement;
  let subject=document.getElementById('subject')as HTMLInputElement;

   let btn=inputs[3]as HTMLInputElement;
    let  templateParams = {
      user: `${email.value}`,
      host: '12620116@nvna.eu',
      name: `${name.value}`,
      lastName: ``,
      message:`${subject.value}`,
    };

    emailjs.send('service_k4d7h5i','template_dj761kj',templateParams,'KLjNClI88IvD6G47G')
      .then(function(response) {

      }, function(err) {
        console.log('FAILED...', err);
      });




    setTimeout(()=>{
      btn.value='Sending!'
    },5000)


  }


}
