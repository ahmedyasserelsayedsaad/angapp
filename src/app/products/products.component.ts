import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShareServiceService } from '../services/share-service.service';
import { Subscription } from 'rxjs';
import { animate, group, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(100px)'
        }),
        group([
          animate(1200, style({
            opacity: 1,

          })),
          animate(1300, style({
            transform: 'translateX(0)',
          }))
        ])
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit, OnDestroy, AfterViewInit {
  data: any = []
  ob: Subscription
  proimg = 'assets/imgs/product.png'

  h3 = 'h3'
  card = 'card'
  h5 = 'h5'

  det = 'det'
  @ViewChild('fil') filter!: ElementRef;
  category: any = []
  constructor(private share: ShareServiceService,) {
    this.ob = this.share.getData().subscribe(dat => {
      this.data = dat
    })
  }

  ngOnInit(): void {
    this.getCat();
    this.getData();
  }
  ngAfterViewInit(): void {
    this.filter.nativeElement.focus();
  }
  ngOnDestroy(): void {
    this.ob.unsubscribe();
  }
  getData() {
    this.share.getData().subscribe(da => {
      this.data = da;
    })
  }
  getCat() {
    this.share.cate().subscribe(res => {
      this.category = res;
    })
  }
  filterCat(event: any) {
    let val = event.target.value;
    if (val == 'All') {
      this.getData()
    } else {
      this.filterbycat(val)
    }

  }
  filterbycat(key: string) {
    this.share.filterByCate(key).subscribe((res: any) => {
      this.data = res;
    })
  }
  
}
