import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class HeaderControlsService {
  title = '';

  constructor(private router: Router) {
  }

  setTitle(title): void {
    this.title = title;
  }

  getTitle(): Observable<string> {
    return Observable.of(this.title);
  }

  goBack(address): void {
    this.router.navigate([address]);
  }
}
