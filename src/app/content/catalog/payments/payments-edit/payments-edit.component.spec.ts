import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsEditComponent } from './payments-edit.component';

describe('PaymentsEditComponent', () => {
  let component: PaymentsEditComponent;
  let fixture: ComponentFixture<PaymentsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
