import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
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

  constructor(private route: ActivatedRoute, private apodService: NasaAPODService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.date = params['date'];
    });
    this.getApodDetails()
  }

  getApodDetails() {
    this.apodService.getApodByDate(this.date).subscribe(apod => {
      this.apodDetails = apod
      console.log(this.apodDetails)
    })
  }

}
