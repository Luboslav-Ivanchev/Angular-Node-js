import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {ServiceService} from "../../service.service";

import {FormGroup,FormControl} from "@angular/forms";

import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {

    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(1);
    };

  }

  loginFormular=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    repeatPassword:new FormControl('')
  })

  result:any;

  login(event:any){

    this.service.loginForm(this.loginFormular.value).subscribe((res:any)=> {
      this.result = res;

      let inputName = document.getElementById('name') as HTMLInputElement;
      let inputEmail = document.getElementById('email') as HTMLInputElement;
      let inputPassword = document.getElementById('password') as HTMLInputElement;
      let inputRepeatPassword = document.getElementById('repeatPassword') as HTMLInputElement;
      let p = document.getElementById('p') as HTMLElement;

      if (this.result === 'Please enter all the details!') {
        p.style.color = 'red';
        p.style.color = '20px';
      }

      if (this.result === 'Wrong credentials!') {
        p.style.color = 'red';
        p.style.fontSize = '20px';
      }

      if (this.result === 'Wrong name!') {
        p.style.color = 'red';
        p.style.fontSize = '20px';
        inputName.style.borderColor='red';
      }

      if (this.result === 'Wrong password!') {
        p.style.color = 'red';
        p.style.fontSize = '20px';
        inputPassword.style.borderColor='red';
      }
      if (this.result === 'Wrong repeat password!') {
        p.style.color = 'red';
        p.style.fontSize = '20px';
        inputRepeatPassword.style.borderColor='red';
      }


      this.service.getUser().subscribe((res: any) => {

        res.user.forEach((object: any) => {
          if(object.email===inputEmail.value && inputPassword.value===object.password
            && inputRepeatPassword.value===object.repeatPassword && inputName.value===object.name){

             localStorage.setItem('email',object.email);
             localStorage.setItem('name',object.name)
            this.router.navigate(['LoggedInSuccessfully/my-profile'],
              {queryParams:{message:inputEmail.value}}).then(()=>{
              window.location.reload();
            })


          }
        })

      })



    })
  }
}


