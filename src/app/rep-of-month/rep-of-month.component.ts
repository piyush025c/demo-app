import { Component, OnInit } from '@angular/core';
import {RepsOfMonthService } from '../reps-of-month.service'
import { RepOfMonth } from '../rep-of-month-details'

@Component({
  selector: 'app-rep-of-month',
  templateUrl: './rep-of-month.component.html',
  styleUrls: ['./rep-of-month.component.css']
})
export class RepOfMonthComponent implements OnInit {

  reps:RepOfMonth[];
  month=1;
  product="A";

  constructor(private repsOfMonthService:RepsOfMonthService) { }

  ngOnInit(): void {

    this.getReps();
  }

  getReps(){

    this.repsOfMonthService.getReps(this.month,this.product).subscribe( data => {
      
      console.log("Reps of Month Works..")
      this.reps=data})
  }

  setMonth(month:number)
  {
    console.log("The seleceted month is" +month);
    this.month=month;
    this.getReps();
  }

  setProduct(product:string)
  {
    console.log("The selected product is"+product);
    this.product=product;
    this.getReps();
  }

}
