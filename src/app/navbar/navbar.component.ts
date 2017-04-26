import { Component } from '@angular/core';
import { Router } from '@angular/router';

const storefrontLinks = [{
		label: 'Theme',
		route: 'dashboard/storefront/theme'
	}, {
		label: 'Design',
		route: 'dashboard/storefront/theme'
	}, {
		label: 'Components',
		route: 'dashboard/storefront/component'
}];

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent {
	storefrontLinks = storefrontLinks;
}