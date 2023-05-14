import { TestBed } from '@angular/core/testing';
import { DateService } from './date.service';


describe('Testing DateService', () => {
  let service: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateService);
  });

  it('should create DateService', () => {
    expect(service).toBeTruthy();
  });

  it('should return the range of dates without given a date', () => {
    const result = service.getRangeDate();
    //Obtener la fecha actual
    const currentDate = new Date(); 
    //Convertir a formato YYYY-MM-DD
    const end_date = currentDate.toISOString().split('T')[0]; 
    //Crear una copia de la fecha actual
    const sixDaysAgo = new Date(currentDate); 
    //Restar 5 días
    sixDaysAgo.setDate(sixDaysAgo.getDate() - 5); 
    //Convertir a formato YYYY-MM-DD
    const start_date = sixDaysAgo.toISOString().split('T')[0]; 
  
    expect(result.end_date).toBe(end_date);
    expect(result.start_date).toBe(start_date);
  });

  it('should return the range of dates for a given date', () => {
    const givenDate = '2022-01-01';
    const result = service.getRangeDate(givenDate);

    // The given date should be the end date
    expect(result.end_date).toBe(givenDate);

    // Start date should be 6 days before the given date
    const sixDaysBefore = new Date(givenDate);
    sixDaysBefore.setDate(sixDaysBefore.getDate() - 5);
    expect(result.start_date).toBe(getFormattedDate(sixDaysBefore));
  });

  // Helper function to format date as YYYY-MM-DD
  function getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

});