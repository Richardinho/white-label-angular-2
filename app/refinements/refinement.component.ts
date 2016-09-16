import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector : 'refinements',
	templateUrl : 'app/refinements/refinements.html',
	styleUrls : ['app/refinements/refinements.css']
})

export class RefinementComponent{

	@Input()
	criteria: any;

	@Output() criteriaChanged = new EventEmitter();

	onDynastySelect(dynasty) {
		this.criteriaChanged.emit({ dynasty });
	}

	onSortSelect(sort) {
		console.log(sort);
	}
};