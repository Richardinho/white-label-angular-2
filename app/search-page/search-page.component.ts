import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data-service';

@Component({
	selector : 'search',
	templateUrl : 'app/search-page/search-page.html',
	styleUrls : ['app/search-page/search-page.css']
})

export class SearchPageComponent implements OnInit {

	constructor(private dataService:DataService) {}

	results: any[];

	criteria : any = {};

	refreshData() {
		this.dataService.getData(this.queryStringFromCriteria(this.criteria))
			.then(data => {
				this.results = data.results;
				this.criteria = data.criteria;
			});
	}

	queryStringFromCriteria(criteria) {

		var queryParams = [
			'sortBy',
			'dynasty',
			'yearFrom',
			'yearTo'
		];

		let self = this;

		return queryParams.reduce((memo, key, index) => {
			let amper = (index > 0) ? '&' : '';
			if(criteria[key]) {
				return memo + amper + this.decamelize(key, '-') + '=' + criteria[key];
			} else {
				return memo;
			}
		}, '?');
	}
	//  todo: should use actual node module rather than this c&p!
	decamelize (str, sep) {
		if (typeof str !== 'string') {
  		throw new TypeError('Expected a string');
  	}

  	sep = typeof sep === 'undefined' ? '_' : sep;

  	return str
  		.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
  		.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
  		.toLowerCase();
	}

	onCriteriaChange(val) {
		this.criteria = Object.assign(this.criteria, val);
		this.refreshData();
	}

	ngOnInit(): void {
		this.refreshData();
	}

};