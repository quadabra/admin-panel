import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  title = '';

  constructor() {
  }

  ngOnInit() {
    // this.title = this.controls.getTitle();
    // this.controls.getTitle().subscribe(title => this.title = title);
    // console.log(this.title);
  }
}
