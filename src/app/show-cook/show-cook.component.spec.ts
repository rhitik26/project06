import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCookComponent } from './show-cook.component';

describe('ShowCookComponent', () => {
  let component: ShowCookComponent;
  let fixture: ComponentFixture<ShowCookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
