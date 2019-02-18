import {Component} from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
  <app-main-nav>
    <router-outlet></router-outlet>
  </app-main-nav>
  `,
})

export class ContentComponent {
}
