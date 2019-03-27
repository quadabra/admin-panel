import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingCheckComponent } from './incoming-check.component';

describe('IncomingCheckComponent', () => {
  let component: IncomingCheckComponent;
  let fixture: ComponentFixture<IncomingCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
