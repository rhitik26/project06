import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomengoComponent } from './homengo.component';

describe('HomengoComponent', () => {
  let component: HomengoComponent;
  let fixture: ComponentFixture<HomengoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomengoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomengoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
