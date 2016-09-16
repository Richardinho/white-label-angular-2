import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../providers/results-service';

@Component({
	selector: 'my-app',
	templateUrl : 'app/appcomponent/app.html',
	styleUrls : ['app/appcomponent/app.css']
})

export class AppComponent implements OnInit {

	constructor(private resultsService:ResultsService) {}

	results: any[];

	ngOnInit(): void {
		this.resultsService.getResults()
			.then(results => {
				this.results = results;
			});
	}
}
