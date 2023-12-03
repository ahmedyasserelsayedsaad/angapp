import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, group } from '@angular/animations'
import { ShareServiceService } from '../services/share-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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
export class LoginComponent implements OnInit {
  lab = 'label'
  v:any
  constructor(private router: Router,private share:ShareServiceService) { 
    this.v=this.share.isAdmin;
    console.log(this.v)
  }

  ngOnInit(): void {
  }
  add(f: NgForm) {
    console.log(f.value);
    if(f.value!=''){
      this.share.isAdmin=true;
    }
  }
  reg() {
    this.router.navigate(['/register']);
    
  }
}
