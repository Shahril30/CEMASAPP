import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Global } from '../../models/globalpass.model';
import { GlobalService } from '../../services/global.service';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})

export class MyprofilePage{
  	constructor(
  	public navCtrl: NavController, 
	public storage: Storage,
	public globalService:GlobalService,
  	public navParams: NavParams) {
  }

  	globaluser:Global[];
	localData:string;

		ionViewWillEnter(){
		this.storage.get('Globaluser').then((data) => {  
		if(data){
      	this.globaluser = JSON.parse(data);
      	Object.keys(this.globaluser).forEach(key => {
      	this.globalService.updateUseremail(key,this.globaluser[key].email);
      });
     	}else{
        this.localData="No data found.";
      }
    });
	}
}
