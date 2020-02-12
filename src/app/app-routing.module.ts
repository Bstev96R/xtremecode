import { ChatroomComponent } from './chatroom/chatroom.component';
import { CartaventaComponent } from "./cartaventa/cartaventa.component";
import { AuthGuard } from "./guards/auth.guard";
import { ImageListComponent } from "./images/image-list/image-list.component";
import { ImageComponent } from "./images/image/image.component";
import { ImagesComponent } from "./images/images.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarouselComponent } from "./carousel/carousel.component";
import { RazaComponent } from "./raza/raza.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FooterComponent } from "./footer/footer.component";
import { CuerpoComponent } from "./cuerpo/cuerpo.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { AddCaracteristicasComponent } from "./add-caracteristicas/add-caracteristicas.component";
import { CaracteristicasComponent } from "./caracteristicas/caracteristicas.component";
import { TimerComponent } from "./timer/timer.component";
import { ProductosComponent } from "./productos/productos.component";
import { CounterComponent } from "./counter/counter.component";
import { PreventaComponent } from "./preventa/preventa.component";
import{SubastaNComponent} from "./subasta-n/subasta-n.component";


export const routes: Routes = [

  {
    path:"subastaN",
    component: SubastaNComponent
  },
  {
    path: "preventa",
    component: PreventaComponent
  },

  {
    path: "counter",
    component: CounterComponent
  },
  {
    path: "producto",
    component: ProductosComponent
  },

  {
    path: "carousel",
    component: CarouselComponent
  },
  {
    path: "raza",
    component: RazaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "perfil",
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "footer",
    component: FooterComponent
  },
  {
    path: "cuerpo",
    component: CuerpoComponent
  },
  {
    path: "registroB",
    component: AddCaracteristicasComponent
  },
  {
    path: "crud",
    component: CaracteristicasComponent
  },
  {
    path: "crud2",
    component: AddCaracteristicasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "carven",
    component: CartaventaComponent
  },
  {
    path: "tiempo",
    component: TimerComponent
  },
  {
    path: "chatroom",
    component: ChatroomComponent
  },
  {
    path: "image",
    component: ImagesComponent,
    children: [
      { path: "upload", component: ImageComponent },
      { path: "list", component: ImageListComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
