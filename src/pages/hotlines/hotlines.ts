import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, ToastController} from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Location } from '../../models/location.model';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-hotlines',
  templateUrl: 'hotlines.html',
})
export class HotlinesPage {

  location: Location = { lat: 4.906883,lng: 114.916486 };
  marker: Location; 

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
    private toast: ToastController,
    private geoLocation: Geolocation,
    private loadCtrl: LoadingController,
  	private callNumber: CallNumber) {
  }


 	onHotlines1(){
 	  this.callNumber.callNumber("7206969", true)
    .then(() => console.log('Dialer Launched!'))
    .catch(() => console.log('Error launching dialer'));
    const loading = this.loadCtrl.create({
    content: 'Getting your location...'
    });
    loading.present();
    this.geoLocation.getCurrentPosition()
    .then(
      location => {
      loading.dismiss();
      this.location.lat = location.coords.latitude;
      this.location.lng = location.coords.longitude;
      this.marker = new Location(this.location.lat, this.location.lng);
      const toast = this.toast.create({
      message: "You make calling Ambulance (991).", 
      duration: 2000,
      position: 'bottom'
      });
      toast.present();
      }
      )
      .catch(  // to display errors
        error => {
          loading.dismiss();
          const toast = this.toast.create({
            message: 'Could not get location, please turn on your GPS',
            duration: 2500
          })
          toast.present();
          console.log(error);
      }
    );
	}

	onHotlines2(){
	this.callNumber.callNumber("8251193", true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
          const loading = this.loadCtrl.create({
    content: 'Getting your location...'
    });
    loading.present();
    this.geoLocation.getCurrentPosition()
    .then(
      location => {
      loading.dismiss();
      this.location.lat = location.coords.latitude;
      this.location.lng = location.coords.longitude;
      this.marker = new Location(this.location.lat, this.location.lng);
      const toast = this.toast.create({
      message: "You make calling Police (993).", 
      duration: 2000,
      position: 'bottom'
      });
      toast.present();
      }
      )
      .catch(  // to display errors
        error => {
          loading.dismiss();
          const toast = this.toast.create({
            message: 'Could not get location, please turn on your GPS',
            duration: 2500
          })
          toast.present();
          console.log(error);
      }
    );
	}

	onHotlines3(){
	this.callNumber.callNumber("7114683", true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
       const loading = this.loadCtrl.create({
      content: 'Getting your location...'
      });
      loading.present();
      this.geoLocation.getCurrentPosition()
      .then(
      location => {
      loading.dismiss();
      this.location.lat = location.coords.latitude;
      this.location.lng = location.coords.longitude;
      this.marker = new Location(this.location.lat, this.location.lng);
      const toast = this.toast.create({
      message: "You make calling Fire and Rescue (995).", 
      duration: 2000,
      position: 'bottom'
      });
      toast.present();
      }
      )
      .catch(  // to display errors
        error => {
          loading.dismiss();
          const toast = this.toast.create({
            message: 'Could not get location, please turn on your GPS',
            duration: 2500
          })
          toast.present();
          console.log(error);
      }
    );
	}

	onHotlines4(){
	this.callNumber.callNumber("8938549", true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
      const loading = this.loadCtrl.create({
      content: 'Getting your location...'
      });
      loading.present();
      this.geoLocation.getCurrentPosition()
      .then(
      location => {
      loading.dismiss();
      this.location.lat = location.coords.latitude;
      this.location.lng = location.coords.longitude;
      this.marker = new Location(this.location.lat, this.location.lng);
      const toast = this.toast.create({
      message: "You make calling Search and Rescue (998).", 
      duration: 2000,
      position: 'bottom'
      });
      toast.present();
      }
      )
      .catch(  // to display errors
        error => {
          loading.dismiss();
          const toast = this.toast.create({
            message: 'Could not get location, please turn on your GPS',
            duration: 2500
          })
          toast.present();
          console.log(error);
      }
    );
	}

	onHotlines5(){
	this.callNumber.callNumber("7114683", true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
      const loading = this.loadCtrl.create({
      content: 'Getting your location...'
      });
      loading.present();
      this.geoLocation.getCurrentPosition()
      .then(
      location => {
      loading.dismiss();
      this.location.lat = location.coords.latitude;
      this.location.lng = location.coords.longitude;
      this.marker = new Location(this.location.lat, this.location.lng);
      const toast = this.toast.create({
      message: "You make calling Talian Darussalam (123).", 
      duration: 2000,
      position: 'bottom'
      });
      toast.present();
      }
      )
      .catch(  // to display errors
        error => {
          loading.dismiss();
          const toast = this.toast.create({
            message: 'Could not get location, please turn on your GPS',
            duration: 2500
          })
          toast.present();
          console.log(error);
      }
    );
	}

	onHotlines6(){
	this.callNumber.callNumber("7114683", true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
      const loading = this.loadCtrl.create({
      content: 'Getting your location...'
      });
      loading.present();
      this.geoLocation.getCurrentPosition()
      .then(
      location => {
      loading.dismiss();
      this.location.lat = location.coords.latitude;
      this.location.lng = location.coords.longitude;
      this.marker = new Location(this.location.lat, this.location.lng);
      const toast = this.toast.create({
      message: "You make calling Talian Harapan (145).", 
      duration: 2000,
      position: 'bottom'
      });
      toast.present();
      }
      )
      .catch(  // to display errors
        error => {
          loading.dismiss();
          const toast = this.toast.create({
            message: 'Could not get location, please turn on your GPS',
            duration: 2500
          })
          toast.present();
          console.log(error);
      }
    );
	}

}
