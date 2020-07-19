import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {ExternalFilesService} from "../_shared/services/external-files.service";
=======
import {ExternalFilesService} from '../_shared/services/external-files.service';
>>>>>>> 29d9968b949bfa3c713b4f85b01d23ea5a881c68

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ExternalFilesService]
})
export class ContactComponent implements OnInit {

  constructor(private externalFilesService: ExternalFilesService) { }

  ngOnInit() {
    this.externalFilesService = new ExternalFilesService();
  }

}
