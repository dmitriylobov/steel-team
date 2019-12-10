import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatedCardComponent } from './rotated-card.component';

describe('RotatedCardComponent', () => {
  let component: RotatedCardComponent;
  let fixture: ComponentFixture<RotatedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
