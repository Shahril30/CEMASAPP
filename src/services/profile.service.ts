import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ProfileService {

	constructor(private db: AngularFireDatabase){}


	private profileRef = this.db.list<Profile>('profile');

	addProfile( username: string,
		phone: number,
		email: string,
		address: string){
		return this.profileRef.push(new Profile(username, phone, email, address));
	}

	getProfile(){
		return this.profileRef;
	}

	editProfile(key: string,
		username: string,
		phone: number,
		email: string,
		address: string){
		return this.profileRef.update(key, new Profile(username, phone, email, address));
	}

	deleteProfile(key: string){
		return this.profileRef.remove(key);
	}

}