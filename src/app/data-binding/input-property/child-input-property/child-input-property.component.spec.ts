import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInputPropertyComponent } from './child-input-property.component';

describe('ChildInputPropertyComponent', () => {
  let component: ChildInputPropertyComponent;
  let fixture: ComponentFixture<ChildInputPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildInputPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInputPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
