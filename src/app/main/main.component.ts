import { Component, OnInit } from '@angular/core';
import {ExternalFilesService} from "../_shared/services/external-files.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ExternalFilesService]

})
export class MainComponent implements OnInit {

  constructor(private externalFilesService: ExternalFilesService) {}


  ngOnInit() {

  }


}
