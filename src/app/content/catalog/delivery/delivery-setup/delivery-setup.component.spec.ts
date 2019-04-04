import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverySetupComponent } from './delivery-setup.component';

describe('PaymentsSetupComponent', () => {
  let component: DeliverySetupComponent;
  let fixture: ComponentFixture<DeliverySetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverySetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
