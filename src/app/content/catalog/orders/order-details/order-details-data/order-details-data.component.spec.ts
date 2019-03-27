import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsDataComponent } from './order-details-data.component';

describe('OrderDetailsDataComponent', () => {
  let component: OrderDetailsDataComponent;
  let fixture: ComponentFixture<OrderDetailsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
