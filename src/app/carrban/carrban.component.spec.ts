import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrbanComponent } from './carrban.component';

describe('CarrbanComponent', () => {
  let component: CarrbanComponent;
  let fixture: ComponentFixture<CarrbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
