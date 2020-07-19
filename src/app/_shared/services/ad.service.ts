import {Injectable} from '@angular/core';
import {Ad} from '../models/ad.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  private ads: Ad[] = [];
  private adsUpdated = new Subject<{ads: Ad[], adCount: number}>();

  constructor(private http: HttpClient) {}

  public getAds() {
    this.http.get<{message: string, ads: Ad[]}>('projects')
      .subscribe((adsData) => {
        this.ads = adsData.ads;
        this.adsUpdated.next({ads: [...this.ads], adCount: this.ads.length});
      });

  }

  public getAdUpdateListener() {
    return this.adsUpdated.asObservable();
  }

  public addAd(ad: Ad) {
    this.ads.push(ad);
    this.adsUpdated.next({ads: [...this.ads], adCount: this.ads.length});
  }
}
