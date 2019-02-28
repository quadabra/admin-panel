import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsHistoryComponent } from './order-details-history.component';

describe('OrderDetailsHistoryComponent', () => {
  let component: OrderDetailsHistoryComponent;
  let fixture: ComponentFixture<OrderDetailsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
