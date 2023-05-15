import { TestBed } from '@angular/core/testing';
import { NasaAPODService } from './nasa-apod.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Apod } from 'src/app/interfaces/apod.interface';
import { mockResponse } from 'src/app/testing/mockResponse';

describe('Testing NasaAPODService', () => {
  let service: NasaAPODService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let dataResponse: Apod[];

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule(
      {
        providers: [NasaAPODService, { provide: HttpClient, useValue: spy}]
      });
    service = TestBed.inject(NasaAPODService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    dataResponse =  mockResponse
  });
  

  it('should be created NasaAPODService service', () => {
    expect(service).toBeTruthy();
  });


  it('should be created NasaAPODService httpClientSpy', () => {
    expect(httpClientSpy).toBeTruthy();
  });


  it('should fetch APODs data for a given date range', (done: DoneFn) => {
    const start_date = '2023-01-01';
    const end_date = '2023-01-05';

    httpClientSpy.get.and.returnValue(of(mockResponse));

    service.firstTimeGetApods(start_date, end_date).subscribe(apodsData => {
      expect(apodsData).toEqual(mockResponse);
      done()
    });

    expect(httpClientSpy.get).toHaveBeenCalled()
  });


  it('should get APOD by date from apodsData$', () => {
    const date = '2023-01-01';
    service.setApods(mockResponse);

    service.getApodByDate(date).subscribe(apod => {
      expect(apod.date).toBe(date);
    });

    expect(httpClientSpy.get).not.toHaveBeenCalled();
  });

  it('should return apodsData$ as an observable', () => {
    service.setApods(mockResponse);

    service.Apods.subscribe(apods => {
      expect(apods).toBe(mockResponse);
    });

    expect(httpClientSpy.get).not.toHaveBeenCalled();
  });

});
