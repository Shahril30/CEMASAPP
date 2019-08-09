import { SettingsProvider } from './../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Brightness } from '@ionic-native/brightness';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
 
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

	selectedTheme: String;
  currentScreenOrientation:string;
  brightnessModel = 0.10;

  constructor(
    public navCtrl: NavController, 
    private settings: SettingsProvider,
    private brightness: Brightness,
    private screenOrientation: ScreenOrientation
    ){
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    this.brightness.setBrightness(this.brightnessModel);
    this.currentScreenOrientation = this.screenOrientation.type;
       this.screenOrientation.onChange().subscribe(
      () => {
        alert("Orientation Changed "+this.screenOrientation.type);
        this.currentScreenOrientation = this.screenOrientation.type;
      }
    );
  }
 
    toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }

  setLandscape(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
 
  setPortrait(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  adjustBrightness(){
    this.brightness.setBrightness(this.brightnessModel);
  }


}