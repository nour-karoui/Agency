import {Component, OnInit} from '@angular/core';
import {ExternalFilesService} from './_shared/services/external-files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private externalFilesService: ExternalFilesService) {}

  ngOnInit() {


  }

}
