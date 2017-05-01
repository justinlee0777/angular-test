import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {APP_BASE_HREF} from '@angular/common';

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
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
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
  bootstrap:    [ DashboardComponent ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule { }
