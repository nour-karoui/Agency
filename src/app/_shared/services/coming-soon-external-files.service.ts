import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ComingSoonExternalFilesService {

  constructor() {
    /*this.loadScript('../assets/js/jquery-migrate-3.0.1.min.js');
    this.loadScript('../assets/js/jquery.easing.1.3.js');
    this.loadScript('../assets/js/jquery.waypoints.min.js');
    this.loadScript('../assets/js/jquery.stellar.min.js');
    this.loadScript('../assets/js/jquery.animateNumber.min.js');
    this.loadScript('../assets/js/owl.carousel.min.js');
    this.loadScript('../assets/js/jquery.magnific-popup.min.js');*/
    this.loadScript('../assets/coming-soon/js/countdown.js');
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
