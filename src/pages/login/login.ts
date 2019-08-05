import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.services';
import { LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private authService: AuthService,
				private LoadingCtrl: LoadingController,
				private alertCtrl: AlertController,
				public navCtrl: NavController) {}

  onLoadRegister(){
		this.navCtrl.push(RegisterPage);
}

	onLogin(form: NgForm){
		const loading = this.LoadingCtrl.create({ //for spinner
			content: 'Signing you In...'          // message on spinner
		});
		loading.present(); //to display loader
		this.authService.signIn(form.value.email,form.value.password)
		.then(data => {
			loading.dismiss();
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