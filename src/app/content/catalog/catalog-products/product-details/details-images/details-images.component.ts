import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragPlaceholder} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-details-images',
  templateUrl: './details-images.component.html',
  styleUrls: ['./details-images.component.css']
})
export class DetailsImagesComponent implements OnInit {
  dataSource = [
    {position: 1, name: 'ATAGS', list: [
        {
          name: 'Color7',
          options: [
            {
              optionName: 'size',
              optionValues: ['raz', 'dva', 'tri']
            },
            {
              optionName: 'height',
              optionValues: ['raz', 'dva', 'tri']
            }
          ]
        }
      ]},
    {position: 2, name: 'TIGER', list: []},
    {position: 3, name: 'OLIVE', list: []},
    {position: 4, name: 'COLOR 4', list: []},
    {position: 5, name: 'COLOR 5', list: []},
    {position: 6, name: 'COLOR 6', list: []},
    {position: 7, name: 'COLOR 7', list: []},
    {position: 8, name: 'COLOR 8', list: []},
    {position: 9, name: 'COLOR 9', list: []},
    {position: 10, name: 'COLOR 10', list: []},
  ];

  displayedColumns: string[] = ['Position', 'Color', 'Images'];

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  colors = [
    {
      name: 'Color1',
      options: [
        {
          optionName: 'size',
          optionValues: ['raz', 'dva', 'tri']
        },
        {
          optionName: 'height',
          optionValues: ['raz', 'dva', 'tri']
        }
      ]
    },
    {
      name: 'Color2',
      options: [
        {
          optionName: 'size',
          optionValues: ['raz', 'dva', 'tri']
        },
        {
          optionName: 'height',
          optionValues: ['raz', 'dva', 'tri']
        }
      ]
    },
    {
      name: 'Color3',
      options: [
        {
          optionName: 'size',
          optionValues: ['raz', 'dva', 'tri']
        },
        {
          optionName: 'height',
          optionValues: ['raz', 'dva', 'tri']
        }
      ]
    },
    {
      name: 'Color4',
      options: [
        {
          optionName: 'size',
          optionValues: ['raz', 'dva', 'tri']
        },
        {
          optionName: 'height',
          optionValues: ['raz', 'dva', 'tri']
        }
      ]
    },
    {
      name: 'Color5',
      options: [
        {
          optionName: 'size',
          optionValues: ['raz', 'dva', 'tri']
        },
        {
          optionName: 'height',
          optionValues: ['raz', 'dva', 'tri']
        }
      ]
    },
    {
      name: 'Color6',
      options: [
        {
          optionName: 'size',
          optionValues: ['raz', 'dva', 'tri']
        },
        {
          optionName: 'height',
          optionValues: ['raz', 'dva', 'tri']
        }
      ]
    }
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
