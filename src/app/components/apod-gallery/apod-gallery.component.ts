import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apod } from 'src/app/interfaces/apod.interface';
import { NasaAPODService } from 'src/app/services/nasa-apod.service';
import { getRangeDate } from 'src/app/utilities/date.utilities'

@Component({
  selector: 'app-apod-gallery',
  templateUrl: './apod-gallery.component.html',
  styleUrls: ['./apod-gallery.component.scss']
})
export class ApodGalleryComponent implements OnInit {

  apodsData: Apod;
  apodsDataSubscription: Subscription;
  isLoading: boolean = false;

  constructor(private apodService: NasaAPODService) { }

  ngOnInit(): void {
    this.getApodsData()
  }
  
  getApodsData() {
    this.isLoading = true;
    const { start_date, end_date } = getRangeDate()

   this.apodsDataSubscription = this.apodService.getApods(start_date, end_date)
    .subscribe(apods => {
      this.isLoading = false
      this.apodsData = apods 
    },(error) => {
      console.log(error.error.error.code)
      this.isLoading = false
    })
  }

  ngOnDestroy(): void {
    //Cancelar la suscripción al destruir el componente
    this.apodsDataSubscription.unsubscribe();
  }

}
