import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/interfaces/apod.interface';
import { NasaAPODService } from 'src/app/services/nasa-apod.service';

@Component({
  selector: 'app-apod-gallery',
  templateUrl: './apod-gallery.component.html',
  styleUrls: ['./apod-gallery.component.scss']
})
export class ApodGalleryComponent implements OnInit {

  apodsData: Apod;

  constructor(private apodService: NasaAPODService) { }

  ngOnInit(): void {
    this.getApodsData()
  }
  
  getApodsData() {
    this.apodService.getApods()
    .subscribe(apods => {
      this.apodsData = apods
      console.log(this.apodsData)
    })
  }

}
