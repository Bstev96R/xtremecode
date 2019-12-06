import { Component, OnInit } from '@angular/core';
import { CaracteristicaInterface } from '../models/Caracteristica.interface';
import { CaracteristicasService } from '../services/caracteristicas.service';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {

  constructor(private caracteristicaService: CaracteristicasService) { }

  ngOnInit() {
    this.caracteristicaService.getCaracteristica().subscribe(caracteristicas=>{
      console.log(caracteristicas);
    })
  }

}
