import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSelectModule } from '@angular/material';

import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { DashSelectService } from './shared/dashSelect.service';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { DashboardProductComponent } from './dashboardProduct/dashboardProduct.component';
import { DashboardProductsComponent } from './dashboardProducts/dashboardProducts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StorefrontPreviewComponent } from './storefrontPreview/storefrontPreview.component';
import { UIPagePathComponent } from './uiPagePath/uiPagePath.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MdSelectModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
  	DashboardComponent,
  	DashboardProductComponent,
  	DashboardProductsComponent,
  	NavbarComponent,
  	SidebarComponent,
    StorefrontPreviewComponent,
  	UIPagePathComponent
  ],
  bootstrap:    [ DashboardComponent ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    DashSelectService
  ]
})
export class AppModule { }
