import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const API_URL = 'https://white-label-api.herokuapp.com/api/emperors';

@Injectable()
export class DataService {

	constructor(private http: Http) {}

	getData(queryString: string): Promise<any> {

		return this.http.get(API_URL + queryString)
							 .toPromise()
							 .then(response => response.json())
							 .catch(this.handleError);
	}

	handleError(e) {
		console.log('error occured', e);
	}
}



