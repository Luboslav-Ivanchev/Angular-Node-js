import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginStatus$:any;


  constructor(
              private router:Router) {


  }

  login:any;
  url:any;

  urlStatement:any;

  ngOnInit(): void {

    let url=window.location.href;
    let str=`${url}`
    let urlState=str.slice(22,42)

    this.urlStatement=urlState;


    const menuBtn = document.querySelector(".menu-icon span")as HTMLElement;
    const searchBtn = document.querySelector(".search-icon")as HTMLElement;
    const cancelBtn = document.querySelector(".cancel-icon")as HTMLElement;
    const items = document.querySelector(".nav-items")as HTMLElement;
    const form = document.querySelector("form")as HTMLFormElement;
    menuBtn.onclick = ()=>{
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
    cancelBtn.onclick = ()=>{
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
      cancelBtn.style.color = "#ff3d00";
    }
    searchBtn.onclick = ()=>{
      form.classList.add("active");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }


    this.refreshOnBackButtonClick();

  }

  refreshOnBackButtonClick(): void {
    this.router.events.subscribe((event: any) => {
      if (event.navigationTrigger === 'popstate') {
        window.location.reload();

      }
    });
  }


  logout(event:any){

    this.router.navigate(['/login']).then(()=>{
      window.location.reload()
    });

  }

  urlEvent(event:any){
  event.preventDefault()


    let search=document.getElementsByClassName('search-data')[0]as HTMLInputElement;
    let form=document.getElementsByClassName('form')[0]as HTMLFormElement;

    if(search.value.includes('Sushi')){
      this.router.navigate(['/sushi']);
      search.value='';
    }else if(search.value.includes('Dishes')){
      this.router.navigate(['/dishes']);
      search.value='';
    }else if(search.value.includes('Pizza')){
      this.router.navigate(['/pizza']);
      search.value='';
    }else if(search.value.includes('Burgers')){
      this.router.navigate(['/burgers']);
      search.value='';
    }else if(search.value.includes('Salads')){
      this.router.navigate(['/salads']);
      search.value='';
    }else if(search.value.includes('Deserts')){
      this.router.navigate(['/deserts']);
      search.value='';
    }else if(search.value.includes('Liquids')){
      this.router.navigate(['/liquids']);
      search.value='';
    }else{
      search.style.color='red'
    }




    if(search.value.includes('sushi')){
      this.router.navigate(['/sushi']);
      search.value='';
    }else if(search.value.includes('dishes')){
      this.router.navigate(['/dishes']);
      search.value='';
    }else if(search.value.includes('pizza')){
      this.router.navigate(['/pizza']);
      search.value='';
    }else if(search.value.includes('burgers')){
      this.router.navigate(['/burgers']);
      search.value='';
    }else if(search.value.includes('salads')){
      this.router.navigate(['/salads']);
      search.value='';
    }else if(search.value.includes('deserts')){
      this.router.navigate(['/deserts']);
      search.value='';
    }else if(search.value.includes('liquids')){
      this.router.navigate(['/liquids']);
      search.value='';
    }else{
      search.style.color='red'
    }


  }
}
