import { Component } from '@angular/core';

const PRODUCTS = new Array(9).fill({
	templateName: 'Template Name',
	content: 'Pudding ice cream tart chocolate cake wafer donut tart gummies. Tiramisu sweet muffin halvah. Pudding wafer bonbon. Jelly beans jujubes jujubes liquorice dessert.'
});
@Component({
	selector: 'dashboard-products',
	template: `
		<div id=dashboard-products>
			<dashboard-product *ngFor="let dashboardProduct of products" [product]="dashboardProduct"></dashboard-product>
		</div>
	`
})
export class DashboardProductsComponent {
	products = PRODUCTS;
}