import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Son3Component } from './son3.component';

describe('Son3Component', () => {
  let component: Son3Component;
  let fixture: ComponentFixture<Son3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Son3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Son3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
