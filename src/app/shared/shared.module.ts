import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashSelectComponent } from './dashSelect/select.component';

@NgModule({
	imports: [
	CommonModule,
	RouterModule
	],
	declarations: [
		DashSelectComponent
	],
	exports: [
		DashSelectComponent
	]
})
export class SharedModule { }