import { Component } from '@angular/core';

@Component({
	selector: 'ui-page-path',
	templateUrl: './uiPagePath.component.html',
	styleUrls: [ './uiPagePath.component.css' ]
})
export class UIPagePathComponent {
	pages: String[] = [ 'Storefront', 'Theme' ];
}