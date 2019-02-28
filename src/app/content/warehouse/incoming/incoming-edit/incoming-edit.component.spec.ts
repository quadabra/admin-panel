import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingEditComponent } from './incoming-edit.component';

describe('IncomingEditComponent', () => {
  let component: IncomingEditComponent;
  let fixture: ComponentFixture<IncomingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
