import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsandoPipeComponent } from './usando-pipe.component';

describe('UsandoPipeComponent', () => {
  let component: UsandoPipeComponent;
  let fixture: ComponentFixture<UsandoPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsandoPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsandoPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
