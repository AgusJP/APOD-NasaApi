import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NasaAPODService } from 'src/app/services/nasaApodService/nasa-apod.service';
import { DateService } from './../../services/dateService/date.service';
import { Apod } from 'src/app/interfaces/apod.interface';

@Component({
  selector: 'app-apod-gallery',
  templateUrl: './apod-gallery.component.html',
  styleUrls: ['./apod-gallery.component.scss']
})
export class ApodGalleryComponent implements OnInit{

  apodsData: Apod[];
  apodsDataSubscription: Subscription;
  isLoading: boolean = false;
  showToast: boolean = false;
  toastMessage: String = "";

  constructor(private apodService: NasaAPODService, private dateService: DateService) {}

  ngOnInit(): void {
    this.getApodsData()

    this.apodsDataSubscription = this.apodService.Apods
    .subscribe((apods: Apod[]) => {
      this.apodsData = apods
      this.isLoading = false
    })
  }
  
  getApodsData() {
    this.isLoading = true
    const { start_date, end_date } = this.dateService.getRangeDate()

    if (!this.apodService.apodsData$.getValue()) {
      this.apodService.firstTimeGetApods(start_date, end_date)
      .subscribe((apods: Apod[]) => {   
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
