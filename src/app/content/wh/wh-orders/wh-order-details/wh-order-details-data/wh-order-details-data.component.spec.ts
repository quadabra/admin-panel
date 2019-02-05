import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhOrderDetailsDataComponent } from './wh-order-details-data.component';

describe('WhOrderDetailsDataComponent', () => {
  let component: WhOrderDetailsDataComponent;
  let fixture: ComponentFixture<WhOrderDetailsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhOrderDetailsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhOrderDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
