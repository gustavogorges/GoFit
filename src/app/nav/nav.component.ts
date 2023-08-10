import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  sideNav : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openNav() : void {
    this.sideNav = true;
  }

}
