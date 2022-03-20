import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-meter',
  templateUrl: './temp-meter.component.html',
  styleUrls: ['./temp-meter.component.css']
})
export class TempMeterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  tempDesc: string = "";
  Tempature(temp: number){
    if (temp < 20) {
      this.tempDesc = " הטמפרטורה היא" + temp + " קריר יחסית ";
    }
    else if (temp >= 20 && temp < 30) {
      this.tempDesc = " טמפרטורה של" + temp + " נעים ונוח ";
    }
    else {
      this.tempDesc = " הטמפרטורה היא" + temp + " חם מאוד! ";
    }
  }
  GetTemp(temp: string) {
    this.Tempature(parseInt(temp));
  }

}
