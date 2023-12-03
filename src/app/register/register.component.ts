import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareServiceService } from '../services/share-service.service';
import { trigger, transition, style, animate, group } from '@angular/animations'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *',[
        style({
          opacity:0,
          transform:'translateX(100px)'
        }),
        group([
          animate(1200,style({
            opacity:1
          })),
          animate(1300,style({
            transform:'translateX(0)'
          }))
        ])
      ])
    ])
  ]
})
export class RegisterComponent implements OnInit {
lab='label';
img='assets/imgs/signup.png'
  constructor(private router:Router,private share:ShareServiceService) { }

  ngOnInit(): void {
  }
add(f:NgForm){
  if(f.value!=''){
    this.share.isAdmin=true;
    this.router.navigate(['/about'])
  }
  console.log(f.value);
}
login(){
this.router.navigate(['/login'])
}
}
