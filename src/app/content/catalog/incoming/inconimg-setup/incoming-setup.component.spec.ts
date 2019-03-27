import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingSetupComponent } from './incoming-setup.component';

describe('IncomingSetupComponent', () => {
  let component: IncomingSetupComponent;
  let fixture: ComponentFixture<IncomingSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
