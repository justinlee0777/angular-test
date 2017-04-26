import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DashboardProductComponent } from './dashboardProduct/dashboardProduct.component';
import { DashboardProductsComponent } from './dashboardProducts/dashboardProducts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SampleAppSelectComponent } from './select/select.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StorefrontPreviewComponent } from './storefrontPreview/storefrontPreview.component';
import { UIPagePathComponent } from './uiPagePath/uiPagePath.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [
  	DashboardComponent,
  	DashboardProductComponent,
  	DashboardProductsComponent,
  	NavbarComponent,
    SampleAppSelectComponent,
  	SidebarComponent,
    StorefrontPreviewComponent,
  	UIPagePathComponent
  ],
  bootstrap:    [ DashboardComponent ]
})
export class AppModule { }
