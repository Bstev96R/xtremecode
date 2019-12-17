import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';
import {CaracteristicaInterface} from '../../models/Caracteristica.interface';
import {CaracteristicasService} from '../../services/caracteristicas.service';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  imageList: any[];
  rowIndexArray: any[];
  caracteristicas: CaracteristicaInterface[];
  editState: boolean = false;
  caracteristicaToEdit: CaracteristicaInterface;
  precio: any[];
  

  constructor( private service: ImageService, private caracteristicaService: CaracteristicasService) { 
    
  }

  ngOnInit() {
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
      }
    );
    this.caracteristicaService.getCaracteristica().subscribe(caracteristicas=>{
      this.caracteristicas = caracteristicas;
      this.precio= caracteristicas
      
    });

    
  }
  
  
 

}
