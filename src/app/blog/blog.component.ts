import {Component, OnInit} from '@angular/core';
import {ExternalFilesService} from '../_shared/services/external-files.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ExternalFilesService]

})
export class BlogComponent implements OnInit {

  constructor(private externalFilesService: ExternalFilesService) {
  }

  ngOnInit() {


  }


}
