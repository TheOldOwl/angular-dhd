import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhdArticleListComponent } from './dhd-article-list.component';

describe('DhdArticleListComponent', () => {
  let component: DhdArticleListComponent;
  let fixture: ComponentFixture<DhdArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhdArticleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhdArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
