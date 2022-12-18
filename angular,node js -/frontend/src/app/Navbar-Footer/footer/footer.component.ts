import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  urlStatement:any;

  ngOnInit(): void {
    let url=window.location.href;
    let str=`${url}`
    let urlState=str.slice(22,42)

    this.urlStatement=urlState;


  }



  logout(event:any) {

    this.router.navigate(['/login']).then(() => {
      window.location.reload()
    });
  }

}
