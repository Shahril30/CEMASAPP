import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { MyprofilePage } from '../myprofile/myprofile';
import { Global } from '../../models/globalpass.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.services';
import { LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
email:string;
password:string;
global:Global;
  constructor(private authService: AuthService,
			private LoadingCtrl: LoadingController,
			private alertCtrl: AlertController,
			public navCtrl: NavController) {}

  onLoadRegister(){
		this.navCtrl.push(RegisterPage);
}

	onLogin(form: NgForm){
		this.email =form.value.email;
		this.password =form.value.password;

		const loading = this.LoadingCtrl.create({ //for spinner
			content: 'Signing you In...'          // message on spinner
		});
		loading.present(); //to display loader
		this.authService.signIn(this.email,this.password)
		.then(data => {
		this.navCtrl.push(MyprofilePage,{global:this.email});loading.dismiss();
		})
		.catch(error => {
				loading.dismiss();
				const alert = this.alertCtrl.create({
					title: 'Sign In Failed!',
					message: error.message,
					buttons: ['OK']
				});
				alert.present(); // to load or show error message
		});
	}

}