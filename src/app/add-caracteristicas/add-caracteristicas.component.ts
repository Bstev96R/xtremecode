import { Component, OnInit } from '@angular/core';
import {  CaracteristicasService} from '../services/caracteristicas.service';
import {CaracteristicaInterface  } from '../models/Caracteristica.interface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-caracteristicas',
  templateUrl: './add-caracteristicas.component.html',
  styleUrls: ['./add-caracteristicas.component.css']
})
export class AddCaracteristicasComponent implements OnInit {
  caracteristicas: CaracteristicaInterface = {
    propietario: '',
    departamento: '',
    municipio: '',
    comarca: '',
    finca: '',
    numero_arete: '',
    color: '',
    raza:'',
    peso:'',
    precio:'',
    antecedentes:'',
    fecha:''

  };

  constructor(private caracteristicaService: CaracteristicasService) { }

  ngOnInit() {
  }

  onGuardarCaracteristicas(myForm: NgForm) {
   
      const fechaNow = Date.now();
      this.caracteristicas.fecha=fechaNow;
      this.caracteristicaService.addCaracteristica(this.caracteristicas);


 

  }

}
