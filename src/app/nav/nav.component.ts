import { Component, OnInit } from '@angular/core';
import { HnDateService } from '../services/hn-date.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  today: number = Date.now();
  dayOfYear: number;
  constructor(private hnDateService: HnDateService ) { }

  ngOnInit() {
    this.dayOfYear = this.hnDateService.setDayOfTheYear();
  }

}
