import { Component, OnInit, Input } from '@angular/core';
import {  CaracteristicasService} from '../services/caracteristicas.service';
import {CaracteristicaInterface  } from '../models/Caracteristica.interface';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Task} from '../models/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-caracteristicas',
  templateUrl: './add-caracteristicas.component.html',
  styleUrls: ['./add-caracteristicas.component.css']
})
export class AddCaracteristicasComponent implements OnInit {
  caracteristicas: CaracteristicaInterface = {
      Propietario: '',
    Departamento: '',
    Municipio: '',
    Comarca: '',
    Finca: '',
    Numero_arete: '',
    Color: '',
    Raza:'',
    Peso:'',
    Precio:'',
    Antecedentes:'',
    fecha:''

  };
  @Input('task') task: Task;

  constructor(private caracteristicaService: CaracteristicasService) { }

  ngOnInit() {
  }

  onGuardarCaracteristicas(myForm: NgForm) {
   
      const fechaNow = Date.now();
      this.caracteristicas.fecha=fechaNow;
      this.caracteristicaService.addCaracteristica(this.caracteristicas);


 

  }

  removeTask(task : Task){
    const response= confirm('Datos guardados');
    

 }

}
