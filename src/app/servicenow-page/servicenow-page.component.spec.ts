import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicenowPageComponent } from './servicenow-page.component';

describe('ServicenowPageComponent', () => {
  let component: ServicenowPageComponent;
  let fixture: ComponentFixture<ServicenowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicenowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicenowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
