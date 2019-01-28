import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhIncomingEditComponent } from './wh-incoming-edit.component';

describe('WhIncomingEditComponent', () => {
  let component: WhIncomingEditComponent;
  let fixture: ComponentFixture<WhIncomingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhIncomingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhIncomingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
