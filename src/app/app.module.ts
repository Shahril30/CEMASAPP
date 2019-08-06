import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';

import { AgmCoreModule } from '@agm/core';   // after install npm agm core import heres
import { Geolocation } from '@ionic-native/geolocation'; // import geolocation
import { CallNumber } from '@ionic-native/call-number';
import { Contacts } from '@ionic-native/contacts';

import {MyApp} from './app.component';
import {HomePage } from '../pages/home/home';
import {AlertPage} from '../pages/alert/alert';
import {ContactPage} from '../pages/contact/contact';
import {HotlinesPage} from '../pages/hotlines/hotlines';
import {MapPage} from '../pages/map/map';
import {SettingsPage} from '../pages/settings/settings';
import {TabsPage} from '../pages/tabs/tabs';

import {AboutPage} from '../pages/about/about';
import {QrcodePage} from '../pages/qrcode/qrcode';
import {MyprofilePage} from '../pages/myprofile/myprofile';
import {LoginPage} from '../pages/login/login';
import {LogoutPage} from '../pages/logout/logout';
import {RegisterPage} from '../pages/register/register';

import { SettingsProvider } from '../providers/settings/settings';
import { AuthService } from '../services/auth.services';
import { ProfileService } from '../services/profile.service';
import { PlacesService } from '../services/place.service';


import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import{IonicStorageModule}from '@ionic/storage';
const firebaseConfig={
    apiKey: "AIzaSyD3HD6-SYijNmbosdZ4i5SnL4NdMhAqgfo",
    authDomain: "cemas-ad8b3.firebaseapp.com",
    databaseURL: "https://cemas-ad8b3.firebaseio.com",
    projectId: "cemas-ad8b3",
    storageBucket: "cemas-ad8b3.appspot.com",
    messagingSenderId: "461302209770"
};




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertPage,
    ContactPage,
    HotlinesPage,
    MapPage,
    SettingsPage,
    TabsPage,
    AboutPage,
    QrcodePage,
    MyprofilePage,
    LoginPage,
    LogoutPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCqMGwNhiorWjL21PpYIki_TkLJ11zGV-M'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertPage,
    ContactPage,
    HotlinesPage,
    MapPage,
    SettingsPage,
    TabsPage,
    AboutPage,
    QrcodePage,
    MyprofilePage,
    LoginPage,
    LogoutPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    CallNumber,
    Contacts,
    SettingsProvider,
    AuthService,
    ProfileService,
    PlacesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SmartAudioProvider
  ]
})
export class AppModule {}
