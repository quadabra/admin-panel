import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhIncomingComponent } from './wh-incoming.component';

describe('WhIncomingComponent', () => {
  let component: WhIncomingComponent;
  let fixture: ComponentFixture<WhIncomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhIncomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhIncomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
