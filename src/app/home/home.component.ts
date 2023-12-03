import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, group } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *',[
        style({
          opacity:0,
          transform:'translateX(100px)'
        }),
        group([
          animate(1000,style({
            opacity:1
          })),
          animate(1000,style({
            transform:'translateX(0)'
          }))
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  log = 'log'
  home1='assets/imgs/home1.png'
  home2='assets/imgs/home2.png'
  home3='assets/imgs/home3.png'
  home4='assets/imgs/home4.png'
  home5='assets/imgs/home5.png'
  home6='assets/imgs/home6.png'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.router.navigate(['/login'])
  }
}
