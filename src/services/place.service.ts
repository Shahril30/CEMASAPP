import { Place } from '../models/place.model';
import { Location } from '../models/location.model';
import{Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class PlacesService {

	constructor(private db: AngularFireDatabase){}

	private placeRef = this.db.list<Place>('place');

	addPlace(title: string,
			 description: string,
			 location: Location){
		return this.placeRef.push(new Place(title, description, location));
	}
	
	getPlace(){
		return this.placeRef;
	}

	deletePlace(key: string){
		return this.placeRef.remove(key);
	}
}