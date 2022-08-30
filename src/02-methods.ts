export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat() : string{
    return `${this.day}/${this.month}/${this.year}`;
  }

}

const myDate = new MyDate(2022, 7, 15);
console.log(myDate.printFormat());
