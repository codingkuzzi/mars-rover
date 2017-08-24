import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
  providers: [ ]
})
export class PhotosListComponent implements OnInit {
  @Input() childPhotos;
  constructor() { }

  ngOnInit() {
  }

}
