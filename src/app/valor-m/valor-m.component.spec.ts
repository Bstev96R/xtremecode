import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorMComponent } from './valor-m.component';

describe('ValorMComponent', () => {
  let component: ValorMComponent;
  let fixture: ComponentFixture<ValorMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
