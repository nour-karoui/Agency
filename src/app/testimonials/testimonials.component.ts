import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TestimonialService} from '../_shared/services/testimonial.service';
import {Testimonial} from '../_shared/models/testimonial.model';
import {Subscription} from 'rxjs';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [];
  private testimonialSub: Subscription;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }


  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonialService.getTestmonials();
    this.testimonialSub = this.testimonialService.getPostUpdateListener()
      .subscribe((testimonials: Testimonial[]) => {
        this.testimonials = testimonials;
        for (let i = 0; i < this.testimonials.length; i++) {
          this.testimonials[i].position = i;
        }
      });
    this.testimonials = this.testimonialService.testimonials;
  }

  ngOnDestroy(): void {
    this.testimonialSub.unsubscribe();
  }

}
