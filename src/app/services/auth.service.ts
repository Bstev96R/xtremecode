import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth  ) { }

  RegisterUser(){

  }

  LoginGoogleUser(){

  }
 
  LoginFacebookUser(){

  }

  LoginEmailPassUser(){

  }

  LogoutUser(){

  }

  isAuth(){
    return this.afsAuth.authState.pipe(map (auth => auth));

  }
}
