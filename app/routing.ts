import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './search-page/search-page.component';
import { EmperorPageComponent } from './emperor-page/emperor-page.component';


let homePageRoute = {
	path : 'home',
	component : SearchPageComponent
};

let emperorPageRoute = {
	path : 'emperor',
	component : EmperorPageComponent
};

let defaultRoute = {
	path : '',
	redirectTo : '/home',
	pathMatch : 'full'
};

const appRoutes: Routes = [
	homePageRoute,
	emperorPageRoute,
	defaultRoute
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);