import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-hotlines',
  templateUrl: 'hotlines.html',
})
export class HotlinesPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	private callNumber: CallNumber) {
  }


 	onHotlines1(){
 	this.callNumber.callNumber("+6737114683", true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
	}

	onHotlines2(){
	this.callNumber.callNumber("+6737114683", true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
	}

	onHotlines3(){
	this.callNumber.callNumber("+6737114683", true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
	}

	onHotlines4(){
	this.callNumber.callNumber("+6737114683", true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
	}

	onHotlines5(){
	this.callNumber.callNumber("+6737114683", true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
	}

	onHotlines6(){
	this.callNumber.callNumber("+6737114683", true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
	}

}
