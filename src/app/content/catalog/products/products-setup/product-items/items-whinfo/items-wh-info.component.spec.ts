import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsWhInfoComponent } from './items-wh-info.component';

describe('ItemsWhInfoComponent', () => {
  let component: ItemsWhInfoComponent;
  let fixture: ComponentFixture<ItemsWhInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsWhInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsWhInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
