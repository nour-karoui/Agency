import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  public carouselOne: NgxCarousel;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pricings = [{
      name: 'Basic',
      price: 35,
      included: ['Video Editing', 'Scriptwriting', 'Free Thumbnail', '3 Days Delivery',
        '1 Length Variation', '1 Size Orientation', 'Royalty Free Music', '40 Seconds Running Time'],
      notIncluded: 'Scroll Stopper'
    },
    {
      name: 'Standard',
      price: 40,
      included: ['Video Editing', 'Scriptwriting', 'Free Thumbnail', '3 Days Delivery',
        '1 Length Variation', '1 Size Orientation', 'Royalty Free Music', '40 Seconds Running Time', 'Scroll Stopper'],
    },
    {
      name: 'Premium',
      price: 55,
      included: ['Video Editing', 'Scriptwriting', '2 Free Thumbnails', '3 Days Delivery',
        '1 Length Variation', '1 Size Orientation', 'Royalty Free Music', '40 Seconds Running Time', '2 Scroll Stoppers'],
    }];
  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 2, lg: 3, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }

}
