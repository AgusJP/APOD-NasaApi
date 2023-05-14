import { Component, OnInit } from '@angular/core';
import { NasaAPODService } from 'src/app/services/nasaApodService/nasa-apod.service';
import { DateService } from './../../services/dateService/date.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  inputDate: string = "";
  toastMessage: String = "";
  showToast: boolean = false;
  
  constructor(private apodService: NasaAPODService, private dateService: DateService) { }

  ngOnInit(): void {}

  getInputDateValue() {
    const { start_date, end_date } = this.dateService.getRangeDate(this.inputDate)

    this.apodService.firstTimeGetApods(start_date, end_date).subscribe((data) => {
      this.apodService.setApods(data)
    },
    (error) => {
      console.log(error)
      this.showToast = true
      if (error.error?.error) {
        this.toastMessage = error.error.error.message
      } else {
        this.toastMessage = error.error.msg
      }  
        setTimeout(() => {
          this.showToast = false
        }, 2500);
    })
  }

}
