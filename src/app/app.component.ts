import { Component, ViewChild  } from '@angular/core';
import { Platform, MenuController, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';

import { MyprofilePage } from '../pages/myprofile/myprofile';
import { AboutPage } from '../pages/about/about';
import { SettingsProvider } from './../providers/settings/settings';
import { SettingsPage } from '../pages/settings/settings';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

import { AuthService } from '../services/auth.services';

import { timer } from 'rxjs/observable/timer';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  showSplash = true;
  rootPage:any = TabsPage;
  homePage: any = HomePage;
  mapPage: any = MapPage;

  myprofilePage: any = MyprofilePage;
  aboutPage: any = AboutPage;
  settingsPage: any = SettingsPage;
  registerPage:any = RegisterPage;
  loginPage:any = LoginPage;

  isAuthenticated = false;
  selectedTheme: String;
  @ViewChild('nav') nav: NavController;
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    private menuCtrl : MenuController,
    private settings: SettingsProvider,

    private authService: AuthService,
    splashScreen: SplashScreen) {
     this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    platform.ready().then(() => {
    firebase.initializeApp({  //Firebase (dari web masukkan sini)
    apiKey: "AIzaSyD3HD6-SYijNmbosdZ4i5SnL4NdMhAqgfo",
    authDomain: "cemas-ad8b3.firebaseapp.com",
    databaseURL: "https://cemas-ad8b3.firebaseio.com",
    projectId: "cemas-ad8b3",
    storageBucket: "cemas-ad8b3.appspot.com",
    messagingSenderId: "461302209770"
    });

    firebase.auth().onAuthStateChanged(user => {  // isAuthenticated (to check and redirect)
      if (user){
          this.isAuthenticated = true;
          this.nav.setRoot(this.rootPage);
      }
      else {
        this.isAuthenticated = false;
        this.nav.setRoot(this.rootPage);
      }
    }); 


      statusBar.styleDefault();
      splashScreen.hide();
         timer(3000).subscribe(() => this.showSplash = false)
    });
  }
    onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

    onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
  }

    onExit(){
    this.authService.logout();
    this.menuCtrl.close();
  }
}

