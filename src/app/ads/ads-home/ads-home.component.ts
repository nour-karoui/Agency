import {Component, OnInit, ViewChild} from '@angular/core';
import {Ad} from '../../_shared/models/ad.model';
import {AdService} from '../../_shared/services/ad.service';
import {Subscription} from 'rxjs';
import {ExternalFilesService} from '../../_shared/services/external-files.service';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-ads-home',
  templateUrl: './ads-home.component.html',
  styleUrls: ['./ads-home.component.css'],
  providers: [ExternalFilesService]
})
export class AdsHomeComponent implements OnInit {
  public carouselOne: NgxCarousel;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  ads: Ad[];
  totalAds: number;
  private subscriber: Subscription;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(private adService: AdService, private externalFilesService: ExternalFilesService) { }

  ngOnInit() {
    this.adService.getAds(3, 1);
    this.subscriber = this.adService
      .getAdUpdateListener()
      .subscribe((projectData: {ads: Ad[], adCount: number}) => {
        this.totalAds = projectData.adCount;
        this.ads = projectData.ads;
        this.ads = this.ads.concat(this.ads);
        console.log('this is the count ' + this.totalAds);
        this.externalFilesService = new ExternalFilesService();
      });
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
}
