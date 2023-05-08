import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailsComponent } from './pages/details/details.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ApodCardComponent } from './components/apod-card/apod-card.component';
import { ApodGalleryComponent } from './components/apod-gallery/apod-gallery.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent,
    SpinnerComponent,
    ApodCardComponent,
    ApodGalleryComponent,
    NavbarComponent,
    BackButtonComponent,
    DetailCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
