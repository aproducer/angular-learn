import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Son4Component } from './son4.component';

describe('Son4Component', () => {
  let component: Son4Component;
  let fixture: ComponentFixture<Son4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Son4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Son4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
