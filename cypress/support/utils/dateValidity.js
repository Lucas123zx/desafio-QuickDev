class DateValidity {
  constructor(date) {
    this.date = date; 
  }

 static formatDate(date) {
    const year = date.getFullYear();
    const mouth = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${mouth}-${day}`;
  }

}

export default DateValidity;