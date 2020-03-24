import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildContentCompostoComponent } from './child-content-composto.component';

describe('ChildContentCompostoComponent', () => {
  let component: ChildContentCompostoComponent;
  let fixture: ComponentFixture<ChildContentCompostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildContentCompostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildContentCompostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
