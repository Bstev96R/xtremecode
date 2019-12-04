import { TestBed } from '@angular/core/testing';

import { CaracteristicasService } from './caracteristicas.service';

describe('CaracteristicasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaracteristicasService = TestBed.get(CaracteristicasService);
    expect(service).toBeTruthy();
  });
});
