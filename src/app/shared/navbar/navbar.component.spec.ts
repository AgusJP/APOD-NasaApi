import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DateService } from 'src/app/services/dateService/date.service';
import { NasaAPODService } from 'src/app/services/nasaApodService/nasa-apod.service';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { Apod } from 'src/app/interfaces/apod.interface';
import { mockResponse } from 'src/app/testing/mockResponse';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let spyapodService: NasaAPODService;
  let spydateService: DateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [
        NasaAPODService,
        DateService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyapodService = TestBed.inject(NasaAPODService);
    spydateService = TestBed.inject(DateService);
  });

  it('should create NavbarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call firstTimeGetApods and setApods when getInputDateValue is called', () => {
    const start_date = '2023-01-31';
    const end_date = '2023-01-26';
    //Response data to be used for testing
    const responseData: Apod[] = mockResponse 

    //Set up spy and mock return values
    spyOn(spydateService, 'getRangeDate').and.returnValue({start_date, end_date})
    spyOn(spyapodService, 'firstTimeGetApods').and.returnValue(of(responseData))
    spyOn(spyapodService, 'setApods')

    //Call the method
    component.getInputDateValue();

    //Expectations
    expect(spydateService.getRangeDate).toHaveBeenCalledWith(component.inputDate);
    expect(spyapodService.firstTimeGetApods).toHaveBeenCalledWith(start_date, end_date);
    expect(spyapodService.setApods).toHaveBeenCalledWith(responseData);
  });

  it('should show toast message on error', fakeAsync(() => {
    //Set up spy and mock error response
    const error = { error: { error: { message: 'Date must be between a valid range of dates' } } };
    spyOn(spyapodService, 'firstTimeGetApods').and.returnValue(throwError(error))

    //Call the method
    component.getInputDateValue();

    //Expectations
    expect(component.showToast).toBe(true);
    expect(component.toastMessage).toBe(error.error?.error?.message);

    //Advance time to trigger setTimeout
    fixture.detectChanges();
    tick(2500);
    //Expectations after setTimeout
    expect(component.showToast).toBe(false);
  }));

  it('should show toast message on error2', () => {
    const error2 = { error: { msg: 'Too much request' } };
    // Set up spy and mock error response
    spyOn(spyapodService, 'firstTimeGetApods').and.returnValue(throwError(error2))
    // Call the method
    component.getInputDateValue();
    expect(component.toastMessage).toBe(error2.error?.msg);
  });

  it('should trigger getInputDateValue when the search button is clicked', () => {
    spyOn(component, 'getInputDateValue');

    // Find the search button and trigger click event
    const searchButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    searchButton.nativeElement.click();

    // Expectations
    expect(component.getInputDateValue).toHaveBeenCalled();
  });
});
