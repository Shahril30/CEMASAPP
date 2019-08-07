import { Component } from '@angular/core';
import { NavController, Platform } from "ionic-angular";
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-siren',
  templateUrl: 'siren.html',
})
export class SirenPage {

  constructor(
  	public navCtrl: NavController, 
  	public platform: Platform, 
  	private nativeAudio: NativeAudio) {
    this.platform.ready().then(() => {
      this.nativeAudio.preloadSimple('uniqueId1', 'assets/sound/emergency.mp3').then((success)=>{
        console.log("success");
      },(error)=>{
        console.log(error);
      });
    });
  }

  play(){
    this.nativeAudio.play('uniqueId1').then((success)=>{
      console.log("success playing");
    },(error)=>{
      console.log(error);
    });
  }
}
