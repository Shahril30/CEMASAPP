import { Component } from '@angular/core';
import { HotlinesPage } from '../hotlines/hotlines';
import { MapPage } from '../map/map';
import { ContactPage } from '../contact/contact';
import { AlertPage } from '../alert/alert';




@Component({
  selector: 'page-tabs',
 template: `
	<ion-tabs selectedIndex="0" id="tabs">
		<ion-tab [root]= "hotlinesPage" tabTitle="Hotlines" tabIcon="md-call"></ion-tab>
		<ion-tab [root]= "mapPage" tabTitle="Panic" tabIcon="md-map"></ion-tab>
		<ion-tab [root]= "contactPage" tabTitle="Emergency Contact" tabIcon="md-contacts"></ion-tab>	
		<ion-tab [root]= "alertPage" tabTitle="Alert" tabIcon="md-alert"></ion-tab>			
	</ion-tabs>
	`
})

export class TabsPage{
	hotlinesPage = HotlinesPage;
	mapPage = MapPage;
	contactPage = ContactPage;
	alertPage = AlertPage;
}
