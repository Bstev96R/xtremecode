import { Component, OnInit } from '@angular/core';
import { CaracteristicaInterface } from '../models/Caracteristica.interface';
import { CaracteristicasService } from '../services/caracteristicas.service';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {
  caracteristicas: CaracteristicaInterface[];
  editState: boolean = false;
  caracteristicaToEdit: CaracteristicaInterface;
  


  
  constructor(private caracteristicaService: CaracteristicasService) { }

  ngOnInit() {
    this.caracteristicaService.getCaracteristica().subscribe(caracteristicas=>{
      this.caracteristicas = caracteristicas;
      
    })
  }

  editCaracteristica(event, Caracteristicas: CaracteristicaInterface) {
    this.editState = true;
    this.caracteristicaToEdit = Caracteristicas;
  }

  clearState() {
    this.editState = false;
    this.caracteristicaToEdit = null;
  }
 
}
