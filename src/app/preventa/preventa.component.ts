import { Component, OnInit } from '@angular/core';
import { CaracteristicaInterface } from '../models/Caracteristica.interface';
import {CaracteristicasService} from '../services/caracteristicas.service';

@Component({
  selector: 'app-preventa',
  templateUrl: './preventa.component.html',
  styleUrls: ['./preventa.component.css']
})
export class PreventaComponent implements OnInit {
  caracteristicas: CaracteristicaInterface[];
  editState: boolean = false;
  caracteristicaToEdit: CaracteristicaInterface;

  constructor(private caracteristicaService: CaracteristicasService) { }

  ngOnInit() {
    this.caracteristicaService.getCaracteristica().subscribe(caracteristicas=>{
      this.caracteristicas = caracteristicas;
    })
  }

}
