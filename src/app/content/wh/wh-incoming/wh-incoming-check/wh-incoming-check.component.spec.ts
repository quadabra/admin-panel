import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhIncomingCheckComponent } from './wh-incoming-check.component';

describe('WhIncomingCheckComponent', () => {
  let component: WhIncomingCheckComponent;
  let fixture: ComponentFixture<WhIncomingCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhIncomingCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhIncomingCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
