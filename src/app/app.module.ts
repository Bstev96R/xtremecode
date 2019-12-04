import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ReactiveFormsModule} from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RazaComponent } from './raza/raza.component';
import { RegisterComponent } from './register/register.component';
import {FooterComponent} from './footer/footer.component'
import {CuerpoComponent} from './cuerpo/cuerpo.component';
import {CaracteristicasComponent} from './caracteristicas/caracteristicas.component';
import {AddCaracteristicasComponent} from './add-caracteristicas/add-caracteristicas.component';

  import { from } from "rxjs";
import {AngularFireAuth} from '@angular/fire/auth';
import {PerfilComponent} from './perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    LoginComponent,
    RazaComponent,
    RegisterComponent,
    CuerpoComponent,
    AddCaracteristicasComponent,
    CaracteristicasComponent,
    PerfilComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ReactiveFormsModule,    

    AngularFireModule.initializeApp(environment.firebaseConfig)
    
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule {}
