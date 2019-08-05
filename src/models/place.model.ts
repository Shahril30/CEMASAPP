// capture image to the place (related lah kirakan)
import { Location } from '../models/location.model';

export class Place{

	constructor(public title: string,
				public description: string,
				public location: Location){}  //for image

}