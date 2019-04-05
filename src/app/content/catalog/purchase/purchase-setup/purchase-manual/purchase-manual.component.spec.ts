import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseManualComponent } from './purchase-manual.component';

describe('PurchaseManualComponent', () => {
  let component: PurchaseManualComponent;
  let fixture: ComponentFixture<PurchaseManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
