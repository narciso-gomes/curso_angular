import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeInpuroComponent } from './pipe-inpuro.component';

describe('PipeInpuroComponent', () => {
  let component: PipeInpuroComponent;
  let fixture: ComponentFixture<PipeInpuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeInpuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeInpuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
