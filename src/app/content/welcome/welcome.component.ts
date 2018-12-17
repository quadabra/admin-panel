import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  items = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.items[i] = i + 1;
    }
  }

}
