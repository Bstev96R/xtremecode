import { Component, OnInit,ElementRef } from '@angular/core';
import {Location,LocationStrategy,PathLocationStrategy} from '@angular/common';
import {AuthService} from '../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(public location: Location, private element : ElementRef, 
    private authService: AuthService, private afsAuth: AngularFireAuth) { 
    this.sidebarVisible = false;
  }

  public isLogged: boolean=false;
  // métodos para el login

  getCurrentUser(){
      this.authService.isAuth().subscribe( auth =>{
          if(auth){
              console.log('user logged');
              this.isLogged = true;
          } else {
            console.log('user no logged');
            this.isLogged = false;
          }
      });

  }
  onLogoutGoogle(){
    this.afsAuth.auth.signOut();
 }
  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

        this.getCurrentUser();
   
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function(){
        toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
};
sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
};
sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
        this.sidebarOpen();
    } else {
        this.sidebarClose();
    }
};
isHome() {
  var titlee = this.location.prepareExternalUrl(this.location.path());
  if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 1 );
  }
    if( titlee === '/home' ) {
        return true;
    }
    else {
        return false;
    }
}
isDocumentation() {
  var titlee = this.location.prepareExternalUrl(this.location.path());
  if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 1 );
  }
    if( titlee === '/documentation' ) {
        return true;
    }
    else {
        return false;
    }
}

}
