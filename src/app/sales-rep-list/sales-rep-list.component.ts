import { Component, OnInit } from '@angular/core';
import { SALESREPS } from '../mock-sales-reps'

@Component({
  selector: 'app-sales-rep-list',
  templateUrl: './sales-rep-list.component.html',
  styleUrls: ['./sales-rep-list.component.css']
})
export class SalesRepListComponent implements OnInit {

  salesReps=SALESREPS;

  constructor() { }

  ngOnInit(): void {
  }

}
