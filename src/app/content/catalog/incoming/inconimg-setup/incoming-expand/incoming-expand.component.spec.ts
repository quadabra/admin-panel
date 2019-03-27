import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingExpandComponent } from './incoming-expand.component';

describe('IncomingExpandComponent', () => {
  let component: IncomingExpandComponent;
  let fixture: ComponentFixture<IncomingExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
