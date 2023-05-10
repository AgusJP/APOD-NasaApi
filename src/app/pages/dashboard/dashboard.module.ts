import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodGalleryComponent } from 'src/app/components/apod-gallery/apod-gallery.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ApodCardComponent } from 'src/app/components/apod-card/apod-card.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ApodGalleryComponent,
    ApodCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
