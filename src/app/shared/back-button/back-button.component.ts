import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  backToDashboard() {
    this.router.navigate(['/dashboard'])
  }

}
