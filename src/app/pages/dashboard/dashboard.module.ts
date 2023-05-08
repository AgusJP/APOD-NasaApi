import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodGalleryComponent } from 'src/app/components/apod-gallery/apod-gallery.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ApodCardComponent } from 'src/app/components/apod-card/apod-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ApodGalleryComponent,
    ApodCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
