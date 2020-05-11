import {Component, OnDestroy, OnInit} from '@angular/core';
import {TestimonialService} from "../_shared/services/testimonial.service";
import {Testimonial} from "../_shared/models/testimonial.model";
import {Subscription} from "rxjs";
import {ExternalFilesService} from '../_shared/services/external-files.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],

})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [];
  private testimonialSub: Subscription;


  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonialService.getTestmonials();
    this.testimonialSub = this.testimonialService.getPostUpdateListener()
      .subscribe((testimonials: Testimonial[]) => {
        this.testimonials = testimonials;
      });
    this.testimonials = this.testimonialService.testimonials;
  }

  ngOnDestroy(): void {
    this.testimonialSub.unsubscribe();
  }

}
