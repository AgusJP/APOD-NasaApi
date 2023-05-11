import { Component, OnInit } from '@angular/core';
import { NasaAPODService } from 'src/app/services/nasa-apod.service';
import { getRangeDate } from 'src/app/utilities/date.utilities';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  inputDate: string = "";
  
  constructor(private apodService: NasaAPODService) { }

  ngOnInit(): void {}

  getInputDateValue() {
    const { start_date, end_date } = getRangeDate(this.inputDate)

    this.apodService.firstTimeGetApods(start_date, end_date).subscribe((data) => {
      this.apodService.setApods(data)
    })
  }

}
