import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-details-image-form',
  templateUrl: './details-image-form.component.html',
  styleUrls: ['./details-image-form.component.css']
})
export class DetailsImageFormComponent implements OnInit {
@Input() dataSource;

imageOptions = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
