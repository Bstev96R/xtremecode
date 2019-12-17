import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Form } from "@angular/forms";
import { Input } from "./input";
import { CaracteristicaInterface } from '../models/Caracteristica.interface';
import {CaracteristicasService} from '../services/caracteristicas.service';

import * as jsPDF from "jspdf";

@Component({
  selector: "app-cartaventa",
  templateUrl: "./cartaventa.component.html",
  styleUrls: ["./cartaventa.component.css"]
})
export class CartaventaComponent implements OnInit {
  caracteristicas: CaracteristicaInterface[];
  editState: boolean = false;
  caracteristicaToEdit: CaracteristicaInterface;
  precio: any[];
  constructor( private caracteristicaService: CaracteristicasService) {}
  @ViewChild("content") content: ElementRef;

  public dowloandpdf() {
    
    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor' : function (element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15,{
      'width' : 190,
      'elementHandlers' : specialElementHandlers
    });

    doc.save('carta preventa.pdf');
  }

  ngOnInit() {
    this.caracteristicaService.getCaracteristica().subscribe(caracteristicas=>{
      this.caracteristicas = caracteristicas;
      this.precio= caracteristicas
      
    });
  }
}
