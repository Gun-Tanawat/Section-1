/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BottomlineComponent } from './bottomline.component';

describe('BottomlineComponent', () => {
  let component: BottomlineComponent;
  let fixture: ComponentFixture<BottomlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
