import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoFilterCorretoComponent } from './uso-filter-correto.component';

describe('UsoFilterCorretoComponent', () => {
  let component: UsoFilterCorretoComponent;
  let fixture: ComponentFixture<UsoFilterCorretoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoFilterCorretoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoFilterCorretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
