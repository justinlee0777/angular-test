import { Injectable } from '@angular/core';

import { DashSelectComponent } from './dashSelect/select.component';

@Injectable()
export class DashSelectService {
	dashSelects: DashSelectComponent[] = [];
	addDashSelect = (dashSelect: DashSelectComponent) => this.dashSelects.push(dashSelect);
	onSelect = function(activeDashSelect: DashSelectComponent) {
		var focused = activeDashSelect.focused;
		this.dashSelects.forEach((dashSelect: DashSelectComponent) => dashSelect.close());
		activeDashSelect.focused = !focused;
	}
}