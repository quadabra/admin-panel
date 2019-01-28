import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhIncomingExpandComponent } from './wh-incoming-expand.component';

describe('WhIncomingExpandComponent', () => {
  let component: WhIncomingExpandComponent;
  let fixture: ComponentFixture<WhIncomingExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhIncomingExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhIncomingExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
