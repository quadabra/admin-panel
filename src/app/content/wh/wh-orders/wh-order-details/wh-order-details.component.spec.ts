import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhOrderDetailsComponent } from './wh-order-details.component';

describe('WhOrderDetailsComponent', () => {
  let component: WhOrderDetailsComponent;
  let fixture: ComponentFixture<WhOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
