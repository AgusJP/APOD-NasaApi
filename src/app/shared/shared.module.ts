import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    BackButtonComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackButtonComponent,
    NavbarComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
