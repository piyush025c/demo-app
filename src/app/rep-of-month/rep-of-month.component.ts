import { Component, OnInit } from '@angular/core';
import {REPSOFMONTH} from '../mock-rep-of-month'

@Component({
  selector: 'app-rep-of-month',
  templateUrl: './rep-of-month.component.html',
  styleUrls: ['./rep-of-month.component.css']
})
export class RepOfMonthComponent implements OnInit {

  reps=REPSOFMONTH;

  constructor() { }

  ngOnInit(): void {
  }

}
