import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }        from './appcomponent/app.component';
import { BannerComponent }     from './banner/banner.component';
import { RefinementComponent } from './refinements/refinement.component';
import { ResultListComponent } from './result-list/result-list.component';
import { routing }             from './routing';
import { SearchPageComponent } from './search-page/search-page.component';
import { EmperorPageComponent } from './emperor-page/emperor-page.component';
import { EmperorCardComponent } from './result-list/emperor-card.component';


import { DataService } from './providers/data-service';

@NgModule({
  imports:      [
    BrowserModule,
    routing, // why import routing rather than declare it?
    HttpModule
  ],
  declarations: [
    AppComponent,
    BannerComponent,
    ResultListComponent,
    RefinementComponent,
    SearchPageComponent,
    EmperorPageComponent,
    EmperorCardComponent
  ],
  providers : [
    DataService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
