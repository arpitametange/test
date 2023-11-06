import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'demo';
  
  constructor(private router:Router){

  }
showHeaderB(){
  if (this.router.url.startsWith('/home')) {
    return true;
  } else {
    return false;
  }
}
}
