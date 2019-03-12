import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent implements OnInit {
  @Input() isMultiple: boolean;
  @Input() imageHash: string;

  constructor() { }

  ngOnInit() {
  }

}
