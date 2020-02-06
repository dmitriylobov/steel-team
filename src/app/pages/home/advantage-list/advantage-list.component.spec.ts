import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantageListComponent } from './advantage-list.component';

describe('AdvantageListComponent', () => {
  let component: AdvantageListComponent;
  let fixture: ComponentFixture<AdvantageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvantageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
