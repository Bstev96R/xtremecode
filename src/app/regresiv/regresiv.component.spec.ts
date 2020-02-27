import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresivComponent } from './regresiv.component';

describe('RegresivComponent', () => {
  let component: RegresivComponent;
  let fixture: ComponentFixture<RegresivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegresivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegresivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
