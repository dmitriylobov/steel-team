import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialScreenComponent } from './partial-screen.component';

describe('PartialScreenComponent', () => {
  let component: PartialScreenComponent;
  let fixture: ComponentFixture<PartialScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
