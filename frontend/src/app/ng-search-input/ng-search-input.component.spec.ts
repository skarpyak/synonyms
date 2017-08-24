import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSearchInputComponent } from './ng-search-input.component';

describe('NgSearchInputComponent', () => {
  let component: NgSearchInputComponent;
  let fixture: ComponentFixture<NgSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
