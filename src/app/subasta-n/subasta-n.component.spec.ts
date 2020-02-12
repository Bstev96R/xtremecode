import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastaNComponent } from './subasta-n.component';

describe('SubastaNComponent', () => {
  let component: SubastaNComponent;
  let fixture: ComponentFixture<SubastaNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubastaNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubastaNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
