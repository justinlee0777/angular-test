import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardProductsComponent } from './dashboardProducts/dashboardProducts.component';
import { StorefrontPreviewComponent } from './storefrontPreview/storefrontPreview.component';


const routes : Routes = [
	{ path: '', redirectTo: '/theme', pathMatch: 'full' },
	{ path: 'theme', component: DashboardProductsComponent },
	{ path: 'component', component: StorefrontPreviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}