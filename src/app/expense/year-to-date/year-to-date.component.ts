import { Component, OnInit } from '@angular/core';
import { HnDateService } from '../../services/hn-date.service';

@Component({
  selector: 'app-year-to-date',
  templateUrl: './year-to-date.component.html',
  styleUrls: ['./year-to-date.component.css']
})
export class YearToDateComponent implements OnInit {

  today: number = Date.now();

  totalSpentForYear = 2000;
  dayOfYear: number;
  spentPerDay: number;
  constructor(private hnDateService: HnDateService) { }

  ngOnInit() {
    this.dayOfYear = this.hnDateService.setDayOfTheYear();
    this.spentPerDay =  this.totalSpentForYear / this.dayOfYear;
  }

}
