import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfoodieComponent } from './showfoodie.component';

describe('ShowfoodieComponent', () => {
  let component: ShowfoodieComponent;
  let fixture: ComponentFixture<ShowfoodieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfoodieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfoodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
