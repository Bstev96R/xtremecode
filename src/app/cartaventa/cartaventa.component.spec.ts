import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaventaComponent } from './cartaventa.component';

describe('CartaventaComponent', () => {
  let component: CartaventaComponent;
  let fixture: ComponentFixture<CartaventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
