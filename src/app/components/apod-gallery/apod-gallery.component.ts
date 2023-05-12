import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Apod } from 'src/app/interfaces/apod.interface';
import { NasaAPODService } from 'src/app/services/nasa-apod.service';
import { getRangeDate } from 'src/app/utilities/date.utilities';


@Component({
  selector: 'app-apod-gallery',
  templateUrl: './apod-gallery.component.html',
  styleUrls: ['./apod-gallery.component.scss']
})
export class ApodGalleryComponent implements OnInit{

  apodsData:Apod;
  apodsDataSubscription: Subscription;
  isLoading: boolean = false;
  showToast: boolean = false;
  toastMessage: String = "";

  constructor(private apodService: NasaAPODService) {}

  ngOnInit(): void {
    this.getApodsData()

    this.apodsDataSubscription = this.apodService.Apods
    .subscribe((apods) => {
      this.apodsData = apods
      this.isLoading = false
    })
  }
  
  getApodsData() {
    this.isLoading = true
    const { start_date, end_date } = getRangeDate()

    if (!this.apodService.apodsData$.getValue()) {
      this.apodService.firstTimeGetApods(start_date, end_date)
      .subscribe(apods => {   
        this.apodsData = apods
        this.apodService.setApods(this.apodsData)
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
        }, 250);
      },
      (error) => {
        this.isLoading = false
        this.showToast = true
        this.toastMessage = error.error.error.message
        setTimeout(() => {
          this.showToast = false
        }, 2500);
      })  
    }
  }

  ngOnDestroy(): void {
    //Cancelar la suscripción al destruir el componente
    if (this.apodsDataSubscription) {
      this.apodsDataSubscription.unsubscribe();
    }
  }

}
