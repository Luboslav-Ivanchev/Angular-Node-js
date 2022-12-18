import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liquids',
  templateUrl: './liquids.component.html',
  styleUrls: ['./liquids.component.css']
})
export class LiquidsComponent implements OnInit {

  constructor() { }

  urlStatement:any;

  ngOnInit(): void {

    let url=window.location.href;
    let str=`${url}`
    let urlState=str.slice(22,42)

    this.urlStatement=urlState;

  }

}
