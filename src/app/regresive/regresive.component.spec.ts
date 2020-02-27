import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresiveComponent } from './regresive.component';

describe('RegresiveComponent', () => {
  let component: RegresiveComponent;
  let fixture: ComponentFixture<RegresiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegresiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegresiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
