import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.services';
import { LoadingController, AlertController } from 'ionic-angular';  


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor( 
  	private authService: AuthService, 
	private LoadingCtrl: LoadingController,
	private alertCtrl: AlertController) {
  }

 	onRegister(form: NgForm){ //function for signup (relate with service)
		
		const loading = this.LoadingCtrl.create({ //for spinner
			content: 'Signing you Up...'          // message on spinner
		});
		loading.present(); //to display loader

		this.authService.signUp(form.value.email, form.value.password)
			.then(data => {
				loading.dismiss();
			})
			.catch(error => {
				loading.dismiss();
				const alert = this.alertCtrl.create({
					title: 'Signup Failed!',
					message: error.message,
					buttons: ['OK']
				});
				alert.present(); // to load or show error message
			});
	}

}