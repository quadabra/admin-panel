import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSetupComponent } from './orders-setup.component';

describe('OrdersSetupComponent', () => {
  let component: OrdersSetupComponent;
  let fixture: ComponentFixture<OrdersSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
