import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Location } from '../../models/location.model';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {


	location: Location = { lat: 4.906883,lng: 114.916486 };
	marker: Location;

  constructor(public navParams: NavParams,
  			  private viewCtrl: ViewController) {

  this.marker = this.location;
  }

  onSetMarker(event: any){ 
  	this.marker = new Location(event.coords.lat, event.coords.lng);
  }

  onAbort(){
  	this.viewCtrl.dismiss();
  }

  onConfirm(){
  	this.viewCtrl.dismiss({ location: this.marker });
  }
}
