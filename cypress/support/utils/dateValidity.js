class DateValidity {
  constructor(date) {
    this.date = date; 
  }

  formatDate() {
    const year = this.date.getFullYear();
    const mouth = (this.date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = this.date.getDate().toString().padStart(2, '0');
  
    return `${year}-${mouth}-${day}`;
  }

  generateDate() {
    return {
      date: this.formatDate()
    };
  }

}

export default DateValidity;