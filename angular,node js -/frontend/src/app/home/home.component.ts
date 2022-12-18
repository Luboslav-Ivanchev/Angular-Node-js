import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public images = ['../../assets/sushi/fit_600_376 (2).png',
    '../../assets/salats/fit_600_376 (2).png',
    '../../assets/pizza/fit_600_376 (3).png',
    '../../assets/pasta/fit_600_376 (6).png',
    '../../assets/dishes/fit_600_376 (6).png',
    '../../assets/burgers/fit_600_376 (3).png',
    '../../assets/desserts/fit_600_376 (4).png',
  ];

  constructor() { }

  urlStatement:any;

  ngOnInit(): void {

    let url=window.location.href;
    let str=`${url}`
    let urlState=str.slice(22,42)

    this.urlStatement=urlState;


    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = Array.from(document.getElementsByClassName("mySlides"))
      for (i = 0; i < slides.length; i++) {
        (<HTMLElement>slides[i]).style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      (<HTMLElement>slides[slideIndex-1]).style.display = "block";

      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }


    let button=document.getElementsByClassName('btn btn-primary')[0];

    button.addEventListener('click',function (e) {
      e.preventDefault()

      let section=document.querySelectorAll('#food-menu');
      let arr=Array.from(section);

      let sec=arr[0]as HTMLElement;
      sec.scrollIntoView();

    })


  }




}
