import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ProfileService {

	constructor(private db: AngularFireDatabase){}
	private AccountRef = this.db.list<Profile>('profile');
	addProfile( 
		phone: string,
		email: string,
		password:string){
		return this.AccountRef.push(new Profile(phone, email, password));
	}

	getProfile(){
		return this.AccountRef;
	}

	editProfile(key: string,
		phone: string,
		email: string,
		password:string){
		return this.AccountRef.update(key, new Profile(phone, email, password));
	}

	deleteProfile(key: string){
		return this.AccountRef.remove(key);
	}

}