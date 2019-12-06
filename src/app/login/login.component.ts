import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private route: Router, private authService: AuthService) {

   }

   public email : "";
   public password : "";
  ngOnInit() {
  }

  onLogin(): void {
    console.log('email', this.email);
    console.log('password', this.password);

    /*this.authService.RegisterUser(this.email, this.password)
    .then((res)=> {
      this.route.navigate(['perfil']);
    }).catch(err => console.log('err', err.message));*/
  }

  onLoginGoogle(): void {
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.authService.LoginGoogleUser()
    .then((res) =>{
    this.route.navigate(['perfil']);
    }).catch(err => console.log('err', err.message));
  }

  onLogoutGoogle(){
    // this.afAuth.auth.signOut();
    this.authService.LogoutUser();
  }
}

