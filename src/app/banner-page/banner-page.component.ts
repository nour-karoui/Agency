import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-page',
  templateUrl: './banner-page.component.html',
  styleUrls: ['./banner-page.component.css']
})
export class BannerPageComponent implements OnInit {
  @Input() pageName;
  constructor() { }

  ngOnInit() {
  }

}
