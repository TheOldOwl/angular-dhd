import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhdHomeComponent } from './dhd-home.component';

describe('DhdHomeComponent', () => {
  let component: DhdHomeComponent;
  let fixture: ComponentFixture<DhdHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhdHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
