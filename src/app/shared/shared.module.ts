import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './toast/toast.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BackButtonComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    BackButtonComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    ToastComponent
  ]
})
export class SharedModule { }
