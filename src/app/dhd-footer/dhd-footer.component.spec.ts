import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhdFooterComponent } from './dhd-footer.component';

describe('DhdFooterComponent', () => {
  let component: DhdFooterComponent;
  let fixture: ComponentFixture<DhdFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhdFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhdFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
