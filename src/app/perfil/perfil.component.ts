import { UserInterface } from './../models/user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }

  displayForm: boolean = false;
  
  user: UserInterface = {
    name:'',
    email: '',
    photoUrl:''
  };

  public providerId: string = 'null';
 
  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
      }
    })
  }
  onLogoutGoogle(){
    this.afsAuth.auth.signOut();
 }
}
