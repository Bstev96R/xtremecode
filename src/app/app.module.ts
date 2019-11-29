import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  import { from } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './Login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
