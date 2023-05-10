import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCardComponent } from 'src/app/components/detail-card/detail-card.component';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DetailsComponent,
    DetailCardComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ],
  exports: [
    DetailsComponent,
  ]
})
export class DetailsModule { }
