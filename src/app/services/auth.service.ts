import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { auth } from "firebase/app";
import { promise } from "protractor";
import { resolve } from "url";
import { reject } from "q";
import { error } from "util";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private afsAuth: AngularFireAuth) {}

  /*RegisterUser(email:string, pass: string){
    return new Promise((resolve, reject)=>{
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject(err));
    }) 
  }*/
  LoginGoogleUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  LoginFacebookUser() {}

  LoginEmailPassUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass).then(
        userData => resolve(userData),
        err => reject(err)
      );
    });
  }

  LogoutUser() {
    return this.afsAuth.auth.signOut();
  }
  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
}
