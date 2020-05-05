import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class ExternalFilesService {

  constructor() {
    this.loadScript('../assets/js/jquery-migrate-3.0.1.min.js');
    // this.loadScript('../assets/js/jquery.easing.1.3.js');
    this.loadScript('../assets/js/jquery.waypoints.min.js');
    this.loadScript('../assets/js/jquery.stellar.min.js');
    this.loadScript('../assets/js/jquery.animateNumber.min.js');
    this.loadScript('../assets/js/owl.carousel.min.js');
    this.loadScript('../assets/js/jquery.magnific-popup.min.js');
    // this.loadScript('../assets/js/scrollax.min.js');
    // this.loadScript('../assets/js/google-map.js');
    this.loadScript('../assets/js/main.js');
    this.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false');

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
