import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartngoComponent } from './cartngo.component';

describe('CartngoComponent', () => {
  let component: CartngoComponent;
  let fixture: ComponentFixture<CartngoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartngoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartngoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
