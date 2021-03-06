import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.services';
import { LoadingController,NavController, ToastController, AlertController } from 'ionic-angular';  
import { ProfileService } from '../../services/profile.service';
import { LoginPage } from '../../pages/login/login';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor( 
  	private authService: AuthService, 
  	public navCtrl: NavController, 
	private LoadingCtrl: LoadingController,
	private alertCtrl: AlertController,
	private toast: ToastController,
	public profileService:ProfileService) {
  }

 	onRegister(form: NgForm){ //function for signup (relate with service)
		
		const loading = this.LoadingCtrl.create({ //for spinner
			content: 'Signing you Up...'          // message on spinner
		});
		loading.present(); //to display loader
  	
		this.authService.signUp(form.value.email, form.value.password)
			.then(data => {
			loading.dismiss();
			this.profileService.addProfile(
       		form.value.phone,
       		form.value.email,
        	form.value.password, 
       		); 
			this.navCtrl.setRoot(LoginPage);
			  const toast = this.toast.create({
		      message: "New account is successfully created", 
		      duration: 2000,
		      position: 'bottom'
		      });
		      toast.present();
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