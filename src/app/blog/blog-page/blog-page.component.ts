import { Component, OnInit } from '@angular/core';
import {ExternalFilesService} from '../../_shared/services/external-files.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
  providers: [ExternalFilesService]

})
export class BlogPageComponent implements OnInit {

  constructor(private externalFilesService: ExternalFilesService) {}

  ngOnInit() {


  }


}
