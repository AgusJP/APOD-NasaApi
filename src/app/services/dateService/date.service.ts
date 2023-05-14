import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() {}

  getRangeDate(date = null) { 
    if (!date) {
    //Current date
      date = new Date(); 
    } else {
      date = new Date(date);
    }
    
    //Convert to YYYY-MM-DD format
    const end_date = date.toISOString().split('T')[0];
    //Subtract 6 days
    date.setDate(date.getDate() - 5); 
    const start_date = date.toISOString().split('T')[0]; 
    //Current date in YYYY-MM-DD format
  
    return {
      start_date,
      end_date
    };
  } 

}



