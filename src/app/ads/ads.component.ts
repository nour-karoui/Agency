import { Component, OnInit } from '@angular/core';
import {ExternalFilesService} from '../_shared/services/external-files.service';
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
  ads: Ad[] = [];
  postsPerPage = 6;
  totalAds: number;
  activePage = 1;
  number = 4;
  private subscriber: Subscription;
  constructor(private externalFilesService: ExternalFilesService, private adService: AdService) {}

  ngOnInit() {
    this.adService.getAds(this.postsPerPage, this.activePage);
    this.subscriber = this.adService
      .getAdUpdateListener()
      .subscribe((projectData: {ads: Ad[], adCount: number}) => {
        this.totalAds = projectData.adCount;
        this.ads = projectData.ads;
        console.log('this is the count ' + this.totalAds);
        this.externalFilesService = new ExternalFilesService();
      });
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }

  changePage(n: number) {
    this.activePage = n;
    this.adService.getAds(this.postsPerPage, this.activePage);

  }

  previousPage() {
    this.activePage --;
    this.adService.getAds(this.postsPerPage, this.activePage);

  }

  nextPage() {
    this.activePage ++;
    this.adService.getAds(this.postsPerPage, this.activePage);
  }
}
