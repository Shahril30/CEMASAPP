import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { Brightness } from '@ionic-native/brightness';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { NativeAudio } from '@ionic-native/native-audio';
import { AgmCoreModule } from '@agm/core';   // after install npm agm core import heres
import { Geolocation } from '@ionic-native/geolocation'; // import geolocation
import { CallNumber } from '@ionic-native/call-number';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Contacts } from '@ionic-native/contacts';

import {MyApp} from './app.component';
import {HomePage } from '../pages/home/home';
import {AlertPage} from '../pages/alert/alert';
import { AddcontactPage } from '../pages/addcontact/addcontact';
import {ContactPage} from '../pages/contact/contact';
import {HotlinesPage} from '../pages/hotlines/hotlines';
import {MapPage} from '../pages/map/map';
import {SettingsPage} from '../pages/settings/settings';
import {TabsPage} from '../pages/tabs/tabs';
import {SirenPage} from '../pages/siren/siren';

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
import { GlobalService } from '../services/global.service';

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
    AddcontactPage,
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
    RegisterPage,
    SirenPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGmFaHP1_4WN8U7sm94tzDZTjYId611o0'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertPage,
    AddcontactPage,
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
    RegisterPage,
    SirenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Brightness,
    ScreenOrientation,
    CallNumber,
    Diagnostic,
    NativeAudio,
    Contacts,
    SettingsProvider,
    AuthService,
    ProfileService,
    PlacesService,
    GlobalService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
