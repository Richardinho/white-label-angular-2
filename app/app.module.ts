import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './appcomponent/app.component';
import { BannerComponent } from './banner/banner.component';
import { ResultListComponent } from './result-list/result-list.component';

@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    BannerComponent,
    ResultListComponent
  ],
  providers : [
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
