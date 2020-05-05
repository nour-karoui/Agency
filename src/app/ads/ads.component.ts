import { Component, OnInit } from '@angular/core';
import {ExternalFilesService} from "../_shared/services/external-files.service";
import {Ad} from '../_shared/models/ad.model';
import {AdService} from '../_shared/services/ad.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css'],
  providers: [ExternalFilesService]

})
export class AdsComponent implements OnInit {

  constructor(private externalFilesService: ExternalFilesService) {}
  ads: Ad[] = [];
  totalAds: number;
  private subscriber: Subscription;
  constructor(private adService: AdService) { }

  ngOnInit() {
    this.loadScript('../../assets/js/jquery-migrate-3.0.1.min.js');
    this.loadScript('../../assets/js/jquery.waypoints.min.js');
    this.loadScript('../../assets/js/jquery.stellar.min.js');
    this.loadScript('../../assets/js/jquery.animateNumber.min.js');
    this.loadScript('../../assets/js/owl.carousel.min.js');
    this.loadScript('../../assets/js/jquery.magnific-popup.min.js');
    this.loadScript('../../assets/js/main.js');
    this.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false');
    this.adService.getAds();
    this.subscriber = this.adService
      .getAdUpdateListener()
      .subscribe((projectData: {ads: Ad[], adCount: number}) => {
        this.totalAds = projectData.adCount;
        this.ads = projectData.ads;
        console.log('this is the count ' + this.totalAds);
      });
  }

  public loadScript(url: string) {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
