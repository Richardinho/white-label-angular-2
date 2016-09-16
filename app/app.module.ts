import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './appcomponent/app.component';
import { BannerComponent } from './banner/banner.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultsService } from './providers/results-service';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BannerComponent,
    ResultListComponent
  ],
  providers : [
    ResultsService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
