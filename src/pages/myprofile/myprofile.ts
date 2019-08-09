import { Component,OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Global } from '../../models/globalpass.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage implements OnInit{
  	constructor(
  	public navCtrl: NavController, 

  	public navParams: NavParams) {
  }

	global:Global;
	email:string;
 	ngOnInit(){
	this.global = this.navParams.get('global');
	}
}
