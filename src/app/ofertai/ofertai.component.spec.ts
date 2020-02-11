import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaiComponent } from './ofertai.component';

describe('OfertaiComponent', () => {
  let component: OfertaiComponent;
  let fixture: ComponentFixture<OfertaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
