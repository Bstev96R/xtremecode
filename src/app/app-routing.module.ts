import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageComponent } from './images/image/image.component';
import { ImagesComponent } from './images/images.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import {RazaComponent} from './raza/raza.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';


export const routes: Routes = [
  
  {
    path: 'carousel', component: CarouselComponent
    
  },
  {
    path: 'raza', component: RazaComponent 
    
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'footer', component: FooterComponent

  },
  {
    path: 'cuerpo' , component: CuerpoComponent

  },
  {
    path: 'image', component: ImagesComponent, children: [
      { path: 'upload', component: ImageComponent },
      { path: 'list', component: ImageListComponent }      
    ]
  }
  
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }