import { ChatService } from './../services/chat.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  
  mensaje : string = "";
  elemento: any;

  constructor (public _cs: ChatService) {
    this._cs.loadMensajes()
        .subscribe(()=>{
          setTimeout(() => {
            this.elemento.scrollTop = this.elemento.scrollHeight;
          }, 20);
          
        });
   }

   ngOnInit() {
     this.elemento = document.getElementById('app-mensajes');
  }

   enviar_mensaje(){
     console.log(this.mensaje)

     if (this.mensaje.length === 0) {
       return;
       
     }

     this._cs.addMensaje(this.mensaje)
             .then(()=> this.mensaje = "")
             .catch((err)=> console.error('Error al enviar', err));
   }


  


}
