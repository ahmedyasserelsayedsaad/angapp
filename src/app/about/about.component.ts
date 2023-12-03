import { animate, group, style, transition ,trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations:[
    trigger('fadeIn',[
      transition('void => *',[
        style({
          opacity:0,
          transform:'translateX(100px)'
        }),
        group([
          animate(1200,style({
            opacity:1,
          })),
          animate(1500,style({
            transform:'translateX(0)'
          }))
        ])
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
img='assets/imgs/about.png'
title='h3'
ptitle='p'
a1='assets/imgs/a1.jpeg'
a2='assets/imgs/a2.jpg'
a3='assets/imgs/a3.png'
a4='assets/imgs/a4.jpg'
a5='assets/imgs/a5.jpg'
t1='assets/imgs/team 1.jpg'
t2='assets/imgs/team2.jpg'
t3='assets/imgs/team3.jpg'
  constructor() { }


  ngOnInit(): void {
  }

}
