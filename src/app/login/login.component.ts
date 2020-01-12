import { ChatService } from './../services/chat.service';
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { NgForm } from "@angular/forms/src/directives/ng_form";
import {NgModule} from '@angular/core';



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  displayForm: boolean = false;
  constructor(
    public afAuth: AngularFireAuth,
    private route: Router,  
    private authService: AuthService,
    public _cs: ChatService
  ) {}
 
  public email: string = '';
  public password: string = '';
  ngOnInit() {}

  onLogin(): void {
    
    this.authService
      .LoginEmailPassUser(this.email, this.password)
      .then(res => {
        this.onLoginRedirect();
      })
      .catch(err => console.log("err", err.message));
  }

  onLoginGoogle(): void {
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
     this.authService
      .LoginGoogleUser()
      .then(res => {
        console.log("resUser", res);
        this.onLoginRedirect();
      })
      .catch(err => console.log("err", err.message));
  }

  onLogoutGoogle() {
    // this.afAuth.auth.signOut();
    this.authService.LogoutUser();
  }
  onLoginRedirect(): void {
    this.route.navigate(["perfil"]);
  }

 
}
