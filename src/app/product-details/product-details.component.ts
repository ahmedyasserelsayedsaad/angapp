import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from '../services/share-service.service';
import { ActivatedRoute } from '@angular/router';
import { animate, group, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
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
export class ProductDetailsComponent implements OnInit {
id:any
detData:any={}
rate='rate'
h3='h3'
h4='h4'
p='p'
explor='explor'
cart='cart'
  constructor(private share:ShareServiceService, private router:ActivatedRoute) {
   // this.share.proDet(this.idd).subscribe(data=>{
    //  console.log(data)
    //})
    //this.router.params.subscribe(d=>{
     //  console.log(d)
     //}),
    this.id=this.router.snapshot.paramMap.get('name');
    console.log(this.id)
   }

  ngOnInit(): void {
    this.share.proDet(this.id).subscribe(data=>{
        this.detData= data
      })
  }
  

}
