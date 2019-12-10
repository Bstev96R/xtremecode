import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit() {
  }
  displayForm: boolean = false;
  public email: string= '';
  public password: string='';
  onAddUser(){
    this.authService.RegisterUser(this.email, this.password)
    .then((res)=>{
      this.router.navigate(['perfil']);
    }).catch(err => console.log('err', err.message));
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


  onLoginRedirect(): void {
    this.router.navigate(["perfil"]);
  }
}


