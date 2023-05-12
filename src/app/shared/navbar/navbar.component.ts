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
  toastMessage: String = "";
  showToast: boolean = false;
  
  constructor(private apodService: NasaAPODService) { }

  ngOnInit(): void {}

  getInputDateValue() {
    const { start_date, end_date } = getRangeDate(this.inputDate)

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
