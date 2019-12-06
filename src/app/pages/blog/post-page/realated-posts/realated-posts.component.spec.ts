import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealatedPostsComponent } from './realated-posts.component';

describe('RealatedPostsComponent', () => {
  let component: RealatedPostsComponent;
  let fixture: ComponentFixture<RealatedPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealatedPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealatedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
