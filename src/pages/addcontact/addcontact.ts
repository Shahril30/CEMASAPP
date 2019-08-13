import { Component} from '@angular/core';
import { Contacts} from '@ionic-native/contacts';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { Contactlist } from '../../models/contact.model';


@Component({
  selector: 'page-addcontact',
  templateUrl: 'addcontact.html',
})
export class AddcontactPage {
	contactlist:Promise<Contactlist[]>;
  	constructor(
  		public contacts: Contacts,
  		public navCtrl: NavController
  	){
    this.contactlist = this.contacts.find(["*"]);
  }
}
