import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhdBlogComponent } from './dhd-blog.component';

describe('DhdBlogComponent', () => {
  let component: DhdBlogComponent;
  let fixture: ComponentFixture<DhdBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhdBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhdBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
