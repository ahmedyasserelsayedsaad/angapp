import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, transition, style, animate, group } from '@angular/animations'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    trigger('fadeIn',[
      transition('void => *',[
        style({
          opacity:0,
          transform:'translateX(100px)'
        }),
        animate(1300,style({
          opacity:1,
          transform:'tarnslateX(0)'
        }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit,AfterViewInit {
img='assets/imgs/contact.png'
lab='labl'
myForm:any
@ViewChild('uu') useer!:ElementRef;
@ViewChild('ee') email!:ElementRef;
@ViewChild('ff') fff!:ElementRef;
  constructor() { 


  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.useer.nativeElement.focus();
    this.email.nativeElement.focus();
    this.fff.nativeElement.focus();
  }
  
add(c:NgForm){
console.log(c.value)
}
}
