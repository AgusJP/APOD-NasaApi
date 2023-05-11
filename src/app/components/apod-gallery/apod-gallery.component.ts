import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apod } from 'src/app/interfaces/apod.interface';
import { NasaAPODService } from 'src/app/services/nasa-apod.service';
import { getRangeDate } from 'src/app/utilities/date.utilities';

@Component({
  selector: 'app-apod-gallery',
  templateUrl: './apod-gallery.component.html',
  styleUrls: ['./apod-gallery.component.scss']
})
export class ApodGalleryComponent implements OnInit{

  apodsData: Apod;
  apodsDataSubscription: Subscription;
  isLoading: boolean = false;
  showToast: boolean = false;

  constructor(private apodService: NasaAPODService) { }

  ngOnInit(): void {
    this.getApodsData()
  }
  
  getApodsData() {
    const { start_date, end_date } = getRangeDate()
    this.isLoading = true;

    if (!this.apodService.apodsData.getValue()) {
      this.apodsDataSubscription = this.apodService.firstTimeGetApods(start_date, end_date)
      .subscribe(apods => {
        this.isLoading = false
        this.apodsData = apods
        this.apodService.setApods(this.apodsData)
        console.log("Sigo en el if")
      },
      (error) => {
        this.isLoading = false
        this.showToast = true
        setTimeout(() => {
          this.showToast = false
        }, 2500);
      })  
    } else {
      this.apodService.getApods().subscribe((apods) => {
        this.isLoading = false
        this.apodsData = apods.getValue()
        console.log(apods.getValue())
      })
      console.log("He llegado al else")
    }
  }

  ngOnDestroy(): void {
    //Cancelar la suscripción al destruir el componente
    if (this.apodsDataSubscription) {
      this.apodsDataSubscription.unsubscribe();
    }
  }

}
