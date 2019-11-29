import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageComponent } from './images/image/image.component';
import { ImagesComponent } from './images/images.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login.component';

export const routes: Routes = [
  
  {
    path: 'image', component: ImagesComponent, children: [
      { path: 'upload', component: ImageComponent },
      { path: 'list', component: ImageListComponent },
      { path: 'login', component: LoginComponent}
    ]
  },
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }