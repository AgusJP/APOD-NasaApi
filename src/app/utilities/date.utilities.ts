export function getRangeDate(date = null) {
    if (!date) {
    //Current date
      date = new Date(); 
    } else {
      date = new Date(date);
    }
    //Subtract 6 days
    date.setDate(date.getDate() - 5); 
    //Convert to YYYY-MM-DD format
    const start_date = date.toISOString().split('T')[0]; 
    //Current date in YYYY-MM-DD format
    const end_date = (new Date()).toISOString().split('T')[0]; 
  
    return {
      start_date,
      end_date
    };
  }

