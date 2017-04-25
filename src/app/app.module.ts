import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { DashboardProductComponent } from './dashboardProduct/dashboardProduct.component';
import { DashboardProductsComponent } from './dashboardProducts/dashboardProducts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UIPagePathComponent } from './uiPagePath/uiPagePath.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
  	DashboardComponent,
  	DashboardProductComponent,
  	DashboardProductsComponent,
  	NavbarComponent,
  	SidebarComponent,
  	UIPagePathComponent
  ],
  bootstrap:    [ DashboardComponent ]
})
export class AppModule { }
