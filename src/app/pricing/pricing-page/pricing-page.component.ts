import { Component, OnInit } from '@angular/core';
import {ExternalFilesService} from "../../_shared/services/external-files.service";

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css'],
  providers: [ExternalFilesService]

})
export class PricingPageComponent implements OnInit {

  constructor(private externalFilesService: ExternalFilesService) {}

  ngOnInit() {


  }


}
