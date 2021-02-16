import { Component, OnInit } from '@angular/core';
import { DrugsOfMonthService } from '../drugs-of-month.service'
import {DrugOfMonth} from '../drug-of-month-details'

@Component({
  selector: 'app-drug-of-month',
  templateUrl: './drug-of-month.component.html',
  styleUrls: ['./drug-of-month.component.css']
})
export class DrugOfMonthComponent implements OnInit {

  drugs:DrugOfMonth[]
  city="Kochi";

  constructor(private drugsOfMonthService: DrugsOfMonthService) { }

  ngOnInit(): void {

    this.getDrugs();
  }

  getDrugs(){

    this.drugsOfMonthService.getDrugs(this.city).subscribe(data=>
      {
        console.log("Drug of the Month Working");
        this.drugs=data;
      })
  }

  setCity(city:string)
  {
    console.log("City selected: "+city);
    this.city=city;
    this.getDrugs();
  }

}
