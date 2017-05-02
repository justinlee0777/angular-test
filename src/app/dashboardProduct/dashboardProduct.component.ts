import { Component, Input } from '@angular/core';

@Component({
	selector: 'dashboard-product',
	templateUrl: './dashboardProduct.component.html'
})

export class DashboardProductComponent {
	@Input() product : ProductModel;
}

interface ProductModel {
	templateName: string;
	content: string;
}