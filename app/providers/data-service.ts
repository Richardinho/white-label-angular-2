import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const API = 'https://white-label-api.herokuapp.com/api';

@Injectable()
export class DataService {

	constructor(private http: Http) {}

	getData(queryString: string): Promise<any> {
		return this.makeCall(API + '/emperors' + queryString);
	}

	getEmperor(id) {
		return this.http.get(API + '/emperor?' + 'id=' + id)
							 .toPromise()
							 .then(response => response.text())
							 .catch(this.handleError);
	}

	makeCall(url) {
		return this.http.get(url)
							 .toPromise()
							 .then(response => response.json())
							 .catch(this.handleError);
	}

	handleError(e) {
		console.log('error occured', e);
	}
}



