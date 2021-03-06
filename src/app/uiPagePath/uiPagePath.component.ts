import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
	selector: 'ui-page-path',
	templateUrl: './uiPagePath.component.html'
})
export class UIPagePathComponent {
	pages: String[] = [];
	constructor(private router: Router) {
		router.events
			.filter((event) => event.constructor.name === 'RoutesRecognized')
			.switchMap((event:RoutesRecognized) => Promise.resolve(event.url))
			.subscribe(url => this.pages = url.substring(1, url.length)
											.split('/')
											.slice(1)
											.map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
					);
	}
}