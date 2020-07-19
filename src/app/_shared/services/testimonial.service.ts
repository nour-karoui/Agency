import {Injectable} from "@angular/core";
import {Testimonial} from '../models/testimonial.model';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private testimonialssUpdated = new Subject<Testimonial[]>();

  testimonials: Testimonial[] = [];

  constructor(private http: HttpClient) {

  }

  getTestmonials() {
    this.http
      .get<{ message: string; testimonials: any }>(
        'testimonials'
      )
      .pipe(map((testimonialData) => {
        return testimonialData.testimonials.map(testimonial => {
          return {
            name: testimonial.name,
            origin: testimonial.origin,
            comment: testimonial.comment,
            country: testimonial.country,
            _id: testimonial._id
          };
        });
      }))
      .subscribe(transformedTestimonials => {
        this.testimonials = transformedTestimonials;
        this.testimonialssUpdated.next([...this.testimonials]);
      });
  }

  getPostUpdateListener() {
    return this.testimonialssUpdated.asObservable();
  }

}
