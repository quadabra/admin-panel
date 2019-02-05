import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhOrderDetailsHistoryComponent } from './wh-order-details-history.component';

describe('WhOrderDetailsHistoryComponent', () => {
  let component: WhOrderDetailsHistoryComponent;
  let fixture: ComponentFixture<WhOrderDetailsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhOrderDetailsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhOrderDetailsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
