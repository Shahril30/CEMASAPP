import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { AddcontactPage } from '../addcontact/addcontact';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  	constructor(
  		public navCtrl: NavController
  	){
  }

   	addNewContact(){
	this.navCtrl.push(AddcontactPage);
	}
}
