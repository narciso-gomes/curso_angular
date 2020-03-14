import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropertyChildComponent } from './output-property-child.component';

describe('OutputPropertyChildComponent', () => {
  let component: OutputPropertyChildComponent;
  let fixture: ComponentFixture<OutputPropertyChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPropertyChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropertyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
