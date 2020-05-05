import { Component, OnInit } from '@angular/core';
import {Ad} from '../../_shared/models/ad.model';
import {AdService} from '../../_shared/services/ad.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-ads-home',
  templateUrl: './ads-home.component.html',
  styleUrls: ['./ads-home.component.css']
})
export class AdsHomeComponent implements OnInit {
  ads: Ad[];
  totalAds: number;
  private subscriber: Subscription;
  constructor(private adService: AdService) { }

  ngOnInit() {
    this.adService.getAds();
    this.subscriber = this.adService
      .getAdUpdateListener()
      .subscribe((projectData: {ads: Ad[], adCount: number}) => {
        this.totalAds = projectData.adCount;
        this.ads = projectData.ads.slice(0, 3);
        console.log('this is the count ' + this.totalAds);
      });
  }

}
