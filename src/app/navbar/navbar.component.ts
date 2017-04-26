import { Component } from '@angular/core';
import { Router } from '@angular/router';

const storefrontLinks = [{
		label: 'Theme',
		route: 'dashboard'
	}, {
		label: 'Design',
		route: 'dashboard'
	}, {
		label: 'Components',
		route: 'storefront'
}];

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent {
	storefrontLinks = storefrontLinks;
}