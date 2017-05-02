import { Component } from '@angular/core';
import { Router } from '@angular/router';

const storefrontLinks = [{
		label: 'Theme',
		route: 'theme'
	}, {
		label: 'Design',
		route: 'theme'
	}, {
		label: 'Components',
		route: 'component'
}];

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
	storefrontLinks = storefrontLinks;
}