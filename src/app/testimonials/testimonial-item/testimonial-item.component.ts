import {Component, Input, OnInit} from '@angular/core';
import {Testimonial} from "../../_shared/models/testimonial.model";

@Component({
  selector: 'app-testimonial-item',
  templateUrl: './testimonial-item.component.html',
  styleUrls: ['./testimonial-item.component.css']
})
export class TestimonialItemComponent implements OnInit {
  @Input() testimonial: Testimonial;
  image: string;

  constructor() {
  }

  ngOnInit() {
  }

}
