import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsSetupComponent } from './payments-setup.component';

describe('PaymentsSetupComponent', () => {
  let component: PaymentsSetupComponent;
  let fixture: ComponentFixture<PaymentsSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
