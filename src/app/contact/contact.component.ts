import { Component, OnInit } from '@angular/core';
import {ExternalFilesService} from '../_shared/services/external-files.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private externalFilesService: ExternalFilesService) { }

  ngOnInit() {
    this.externalFilesService = new ExternalFilesService();
  }

}
