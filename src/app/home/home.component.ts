import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../hotels.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active : Number = 1;
  hotels : any ;
  sliders : any ;
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
    margin:20,
    autoplayHoverPause:true,
  }
  src:string = "http://satafood.codesroots.com:3000/";
  constructor(private _HotelsService : HotelsService) {
    _HotelsService.getHotelsDetails().subscribe((data)=>{
      this.hotels = data.newoffers;
      this.sliders = data.sliders;
      
    })
    
  }

  ngOnInit(): void {
  }
  setActive(num: Number){
    this.active = num;
  }
}
