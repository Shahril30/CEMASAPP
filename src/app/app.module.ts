import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AlertPage} from '../pages/alert/alert';
import {ContactPage} from '../pages/contact/contact';
import {HotlinesPage} from '../pages/hotlines/hotlines';
import {MapPage} from '../pages/map/map';
import {SettingsPage} from '../pages/settings/settings';
import {TabsPage} from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertPage,
    ContactPage,
    HotlinesPage,
    MapPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
