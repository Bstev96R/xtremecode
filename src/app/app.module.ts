import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ImagesComponent } from "./images/images.component";
import { ImageComponent } from "./images/image/image.component";
import { ImageListComponent } from "./images/image-list/image-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";

import { NavbarComponent } from "./navbar/navbar.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RazaComponent } from "./raza/raza.component";
import { RegisterComponent } from "./register/register.component";
import { FooterComponent } from "./footer/footer.component";
import { CuerpoComponent } from "./cuerpo/cuerpo.component";
import { CaracteristicasComponent } from "./caracteristicas/caracteristicas.component";
import { AddCaracteristicasComponent } from "./add-caracteristicas/add-caracteristicas.component";
import { AngularFireAuth } from "@angular/fire/auth";
import { PerfilComponent } from "./perfil/perfil.component";
import { CaracteristicasService } from "./services/caracteristicas.service";
import { TimerComponent } from "./timer/timer.component";
import { ProductosComponent } from "./productos/productos.component";
import { CounterComponent } from "./counter/counter.component";
import { PreventaComponent } from "./preventa/preventa.component";
import { CartaventaComponent } from "./cartaventa/cartaventa.component";

import { TaskService } from "./services/task.service";
import { TaskComponent } from "./task/task.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { TaskListComponent } from "./task-list/task-list.component";

import { ChatFormComponent } from "./chat-form/chat-form.component";
import { ChatroomComponent } from "./chatroom/chatroom.component";
import { FeedComponent } from "./feed/feed.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserItemComponent } from "./user-item/user-item.component";
import { MessageComponent } from "./message/message.component";

import { ChatService } from './services/chat.service';


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
    PerfilComponent,
    TimerComponent,
    ProductosComponent,
    CounterComponent,
    PreventaComponent,
    TaskComponent,
    TaskFormComponent,
    TaskListComponent,
    CartaventaComponent,
    MessageComponent,
    UserItemComponent,
    UserListComponent,
    FeedComponent,
    ChatroomComponent,
    ChatFormComponent
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
    AngularFirestoreModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AngularFireAuth, CaracteristicasService, TaskService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {}
