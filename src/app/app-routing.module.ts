import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardProductsComponent } from './dashboardProducts/dashboardProducts.component';
import { StorefrontPreviewComponent } from './storefrontPreview/storefrontPreview.component';


const routes : Routes = [
	{ path: '', redirectTo: '/dashboard/storefront/theme', pathMatch: 'full' },
	{ path: 'dashboard/storefront/theme', component: DashboardProductsComponent, pathMatch: 'full' },
	{ path: 'dashboard/storefront/component', component: StorefrontPreviewComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}