import {Component, OnInit} from '@angular/core';
import {HeaderControlsService} from './header-controls.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  title;

  constructor(private controls: HeaderControlsService) {
  }

  ngOnInit() {
    this.title = this.controls.getTitle();
    // this.title.subscribe(() => this.controls.getTitle());
    console.log(this.title);
  }
}
