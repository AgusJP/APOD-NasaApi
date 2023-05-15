import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ApodGalleryComponent } from './apod-gallery.component';
import { NasaAPODService } from 'src/app/services/nasaApodService/nasa-apod.service';
import { DateService } from 'src/app/services/dateService/date.service';
import { mockResponse } from 'src/app/testing/mockResponse';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApodGalleryComponent', () => {
  let component: ApodGalleryComponent;
  let fixture: ComponentFixture<ApodGalleryComponent>;
  let apodService: NasaAPODService
  let dateService: DateService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApodGalleryComponent],
      imports: [HttpClientTestingModule],
      providers: [
        NasaAPODService,
        DateService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ApodGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apodService = TestBed.inject(NasaAPODService) 
    dateService = TestBed.inject(DateService) 
  });

  it('should create ApodGalleryComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should create date service', () => {
    expect(dateService).toBeTruthy();
  });

  it('should set isLoading to true and call apodService.firstTimeGetApods when apodsData$ is not available', fakeAsync(() => {
    const start_date = '2023-01-10';
    const end_date = '2023-01-01';
    const apods = mockResponse

    spyOn(dateService, 'getRangeDate').and.returnValue({ start_date, end_date });
    spyOn(apodService.apodsData$, 'getValue').and.returnValue(null)
    spyOn(apodService, 'firstTimeGetApods').and.returnValue(of(apods));

    component.getApodsData();
    fixture.detectChanges()

    expect(component.isLoading).toBe(true);
    expect(component.apodsData).toEqual(apods);
  
    fixture.detectChanges();
    tick(2500);
    expect(component.isLoading).toBe(false);
  }));

  it('should set isLoading to false and showToast to true when there is an error', fakeAsync(() => {
    const start_date = '2023-01-10';
    const end_date = '2023-01-01';
    const apods = mockResponse
    const error = { error: { error: { message: 'Too much requests' } } };

    spyOn(dateService, 'getRangeDate').and.returnValue({ start_date, end_date });
    spyOn(apodService.apodsData$, 'getValue').and.returnValue(null)
    spyOn(apodService, 'firstTimeGetApods').and.returnValue(throwError(error));

    component.getApodsData();

    expect(component.isLoading).toBe(false);
    expect(component.showToast).toBe(true);
    expect(component.toastMessage).toBe(error.error.error.message);

    fixture.detectChanges();
    tick(2500);
    expect(component.isLoading).toBe(false);
  }));

});