import { Component, OnInit } from '@angular/core';
import {ExternalFilesService} from "../_shared/services/external-files.service";

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css'],
  providers: [ExternalFilesService]

})
export class AdsComponent implements OnInit {

  constructor(private externalFilesService: ExternalFilesService) {}

  ngOnInit() {


  }


}
