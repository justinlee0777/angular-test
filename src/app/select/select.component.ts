import { Component, Input } from '@angular/core';

@Component({
	selector: 'sample-app-select',
	template: `
		<div class=select>
			<div class=name [ngClass]="{ focused: focused }" (click)="onClick()">{{ label }}</div>
			<div class=dropdown [hidden]=!focused>
				<div class=option *ngFor="let option of options" (click)="onClickOption(option)">{{ option.label }}</div>
			</div>
		</div>
	`,
	styleUrls: [ './select.component.css' ]
})
export class SampleAppSelectComponent {
	@Input() label: string;
	@Input() options;
	focused: boolean = false;
	onClick = () => this.focused = !this.focused;
	onClickOption = (option) => option.onClick();
}