import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-item',
  templateUrl: './pricing-item.component.html',
  styleUrls: ['./pricing-item.component.css']
})
export class PricingItemComponent implements OnInit {
  @Input() pricing;
  constructor() { }

  ngOnInit() {
  }

}
