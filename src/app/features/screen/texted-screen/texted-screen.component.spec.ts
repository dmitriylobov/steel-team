import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextedScreenComponent } from './texted-screen.component';

describe('TextedScreenComponent', () => {
  let component: TextedScreenComponent;
  let fixture: ComponentFixture<TextedScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextedScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextedScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
