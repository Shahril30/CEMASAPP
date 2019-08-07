import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Location } from '../../models/location.model';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {


	location: Location = { lat: 4.906883,lng: 114.916486 };
	marker: Location;  
  locationIsSet = false;


  constructor(public navParams: NavParams,        
          private geoLocation: Geolocation,
          private loadCtrl: LoadingController,
          private toast: ToastController
          ) {

  this.marker = this.location;
  }

  onLocate(){
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
        this.locationIsSet = true;
        const toast = this.toast.create({
        message: "Your location is already marking.", 
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
            message: 'Could not get location, please select it manually!',
            duration: 2500
          })
            toast.present();
          console.log(error);
        }
        );
  }

  onSetMarker(event: any){ 
  	this.marker = new Location(event.coords.lat, event.coords.lng);
    this.locationIsSet = true;
  }

  onReset(){
    this.location = { lat: 4.906883,lng: 114.916486 };
  	this.marker = this.location;
    this.locationIsSet = false;
    const toast = this.toast.create({
    message: "Marking Location is successfully reset", 
    duration: 2000,
    position: 'bottom'
    });
    toast.present();
  }

  onSubmit(form: NgForm){
      form.reset();
      this.location = {
      lat: 4.906883,
      lng: 114.916486
    };
      this.locationIsSet = false;
      const toast = this.toast.create({
      message: "Request emergency is sended. Keep patience", 
      duration: 2000,
      position: 'bottom'
      });
      toast.present();
    }
}
