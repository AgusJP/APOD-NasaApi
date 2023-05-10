import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    BackButtonComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BackButtonComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent
  ]
})
export class SharedModule { }
