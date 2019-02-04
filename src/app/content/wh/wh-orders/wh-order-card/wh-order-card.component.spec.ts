import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhOrderCardComponent } from './wh-order-card.component';

describe('WhOrderCardComponent', () => {
  let component: WhOrderCardComponent;
  let fixture: ComponentFixture<WhOrderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhOrderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
