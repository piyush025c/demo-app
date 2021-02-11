import { Component, OnInit } from '@angular/core';
import {DRUGOFMONTH} from '../mock-drugs-of-month'

@Component({
  selector: 'app-drug-of-month',
  templateUrl: './drug-of-month.component.html',
  styleUrls: ['./drug-of-month.component.css']
})
export class DrugOfMonthComponent implements OnInit {

  drugs=DRUGOFMONTH;

  constructor() { }

  ngOnInit(): void {
  }

}
