import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-assembly-active',
  templateUrl: './assembly-active.component.html',
  styleUrls: ['./assembly-active.component.css']
})
export class AssemblyActiveComponent implements OnInit {
  objectKeys = Object.keys;
  displayedColumns: string[] = ['image', 'name', 'manufacturer', 'options', 'check'];
  isLargeImages = true;

  dataSource = [
    {
      image: 'azaz',
      name: 'razraz',
      nameRu: 'азазаза',
      manufacturer: 'akakaka',
      checked: false,
      options: {
        size: '32',
        height: '43',
        color: 'green',
      }
    },
    {
      image: 'azaz',
      name: 'razraz',
      nameRu: 'азазаза',
      manufacturer: 'akakaka',
      checked: false,
      options: {
        size: '32',
        height: '43',
        color: 'green',
      }
    },
    {
      image: 'azaz',
      name: 'razraz',
      nameRu: 'азазаза',
      manufacturer: 'akakaka',
      checked: false,
      options: {
        size: '32',
        height: '43',
        color: 'green',
      }
    },
    {
      image: 'azaz',
      name: 'razraz',
      nameRu: 'азазаза',
      manufacturer: 'akakaka',
      checked: false,
      options: {
        size: '32',
        height: '43',
        color: 'green',
      }
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
  }

  toggleImageSize(): void {
    this.isLargeImages = !this.isLargeImages;
  }

}
