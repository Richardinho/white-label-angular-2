import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }        from './appcomponent/app.component';
import { BannerComponent }     from './banner/banner.component';
import { RefinementComponent } from './refinements/refinement.component';
import { ResultListComponent } from './result-list/result-list.component';

import { ResultsService } from './providers/results-service';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BannerComponent,
    ResultListComponent,
    RefinementComponent
  ],
  providers : [
    ResultsService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
