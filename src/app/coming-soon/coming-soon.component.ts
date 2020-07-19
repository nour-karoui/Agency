import { Component, OnInit } from '@angular/core';
import {ComingSoonExternalFilesService} from '../_shared/services/coming-soon-external-files.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css'],
  providers: [ComingSoonExternalFilesService],
})
export class ComingSoonComponent implements OnInit {

  constructor(private comingSoonExternalFiles: ComingSoonExternalFilesService) { }

  ngOnInit() {
  }

}
