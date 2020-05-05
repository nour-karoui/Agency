import { Component, OnInit } from '@angular/core';
import {ExternalFilesService} from "../_shared/services/external-files.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ExternalFilesService]
})
export class AboutComponent implements OnInit {

  constructor(private externalFilesService: ExternalFilesService) {}

  ngOnInit() {

  }


}
