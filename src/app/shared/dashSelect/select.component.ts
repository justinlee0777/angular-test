import { Component, Input } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';

import { DashSelectService } from '../dashSelect.service';

@Component({
	selector: 'dash-select',
	template: `
		<div class=dash-select>
			<div class=name [ngClass]="{ focused: focused }" (click)="onClick()">{{ placeholder }}</div>
			<div class=dropdown [@show]="focused.toString()">
				<div *ngFor="let option of options; let i = index" [routerLink]="[option.route]" (click)="onClickOption()" class="option">{{ option.label }}</div>
			</div>
		</div>
	`,
	animations: [
		trigger('show', [
			state('true' , style({ opacity: 1 })),
			state('false', style({ opacity: 0, width: 0, height: 0  })),
			transition('false <=> true', animate('100ms')),
		])
	]
})
export class DashSelectComponent {
	@Input() placeholder: string;
	@Input() options: SelectOptions[];
	DashSelectService: DashSelectService;

	close = () => this.focused = false;
	focused: boolean = false;
	onClick = () => this.DashSelectService.onSelect(this);
	onClickOption = this.close;

	constructor(DashSelectService: DashSelectService) {
		this.DashSelectService = DashSelectService;
		this.DashSelectService.addDashSelect(this);
	}
}

interface SelectOptions {
	label: string;
	route?: string;
}