import { Component } from '@angular/core';

const storefrontLinks = [{
		label: 'Theme',
		onClick: () => console.log('noop')
	}, {
		label: 'Design',
		onClick: () => console.log('noop')
	}, {
		label: 'Components',
		onClick: () => console.log('noop')
}];

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent {
	storefrontLinks = storefrontLinks;
}