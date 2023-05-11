import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { Apod } from 'src/app/interfaces/apod.interface';
import { NasaAPODService } from 'src/app/services/nasa-apod.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  date: string;
  apodDetails: Apod;
  apodDetailsSubscription: Subscription;
  isLoading: boolean = false;
  showToast: boolean = false;

  constructor(private route: ActivatedRoute, private apodService: NasaAPODService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.date = params['date'];
    });
    
    this.getApodDetails()
  }
  
  getApodDetails() {
    this.isLoading = true;

    this.apodDetailsSubscription = this.apodService.getApodByDate(this.date)
    .subscribe(apod => {
      console.log(apod)
      this.isLoading = false;
      this.apodDetails = apod
    },
    (error) => {
      this.isLoading = false;
      this.showToast = true
      setTimeout(() => {
        this.showToast = false
      }, 2500);
    })
  }

  ngOnDestroy(): void {
    //Cancelar la suscripción al destruir el componente
    if (this.apodDetailsSubscription) {
      this.apodDetailsSubscription.unsubscribe();
    }  
  }

}
