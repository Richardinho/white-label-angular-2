import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const API_URL = 'https://white-label-api.herokuapp.com/api/emperors';

@Injectable()
export class ResultsService {

	constructor(private http: Http) {}

	getResults(): Promise<any[]> {

		return this.http.get(API_URL)
							 .toPromise()
							 .then(response => response.json().results)
							 .catch(this.handleError);
	}

	handleError(e) {
		console.log('error occured', e);
	}
}



