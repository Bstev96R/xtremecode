import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymeSComponent } from './payme-s.component';

describe('PaymeSComponent', () => {
  let component: PaymeSComponent;
  let fixture: ComponentFixture<PaymeSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymeSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymeSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
