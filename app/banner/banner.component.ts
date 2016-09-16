import { Component } from '@angular/core';

@Component({
	selector: 'banner',
	templateUrl : 'app/banner/banner.html',
	styleUrls : ['app/banner/banner.css']

})

export class BannerComponent {
	title: string = 'Emperors of Rome';
}