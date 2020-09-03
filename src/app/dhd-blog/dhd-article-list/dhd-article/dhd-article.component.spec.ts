import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhdArticleComponent } from './dhd-article.component';

describe('DhdArticleComponent', () => {
  let component: DhdArticleComponent;
  let fixture: ComponentFixture<DhdArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhdArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhdArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
