import { Component, OnInit } from '@angular/core';
import {ExternalFilesService} from "../../_shared/services/external-files.service";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  providers: [ExternalFilesService]

})
export class BlogDetailComponent implements OnInit {

  constructor(private externalFilesService: ExternalFilesService) {}

  ngOnInit() {

  }


}
