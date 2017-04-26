import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardProductsComponent } from './dashboardProducts/dashboardProducts.component';
import { StorefrontPreviewComponent } from './storefrontPreview/storefrontPreview.component';


const routes : Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardProductsComponent },
	{ path: 'storefront', component: StorefrontPreviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}