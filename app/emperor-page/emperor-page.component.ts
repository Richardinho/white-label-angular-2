import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data-service';

@Component({
	templateUrl : 'app/emperor-page/emperor-page.html',
	selector : 'emperor'
})
export class EmperorPageComponent implements OnInit {

	emperor: any;

	constructor (private dataService: DataService) {}

	ngOnInit() {
		this.refreshData();
	}

	refreshData() {

		this.dataService.getEmperor(1)
			.then(emperor => {
				this.emperor = emperor
			});
	}

}