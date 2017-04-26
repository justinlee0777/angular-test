import { Component, Input } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';

@Component({
	selector: 'sample-app-select',
	template: `
		<div class=select>
			<div class=name [ngClass]="{ focused: focused }" (click)="onClick()">{{ label }}</div>
			<div class=dropdown [@show]="focused.toString()">
				<div class=option *ngFor="let option of options" (click)="onClickOption()" [routerLink]="[option.route]">{{ option.label }}</div>
			</div>
		</div>
	`,
	styleUrls: [ './select.component.css' ],
	animations: [
		trigger('show', [
			state('true' , style({ opacity: 1 })),
			state('false', style({ opacity: 0, width: 0, height: 0  })),
			transition('false <=> true', animate('100ms')),
		])
	]
})
export class SampleAppSelectComponent {
	@Input() label: string;
	@Input() options : SelectOptions;
	focused: boolean = false;
	onClick = () => this.focused = !this.focused;
	onClickOption = () => this.focused = false;
}

interface SelectOptions {
	label: string;
	route?: string;
}