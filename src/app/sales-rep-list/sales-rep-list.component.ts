import { Component, OnInit } from '@angular/core';
import { SalesRep } from '../sales-rep'
import { SalesRepsService } from '../sales-reps.service';
import { Router } from '@angular/router';
import {NgxPaginationModule } from 'ngx-pagination'


@Component({
  selector: 'app-sales-rep-list',
  templateUrl: './sales-rep-list.component.html',
  styleUrls: ['./sales-rep-list.component.css']
})
export class SalesRepListComponent implements OnInit {

  salesReps:SalesRep[];
  offset=0;
  limit=5;
  curPage=1;

  constructor(private salesRepsService: SalesRepsService, private router: Router) { }

  ngOnInit(): void {

    this.getSalesReps();
  }

  getSearchReps(pattern:string)
  {
      console.log("The pattern is "+pattern);

      if(pattern=='')
      this.getSalesReps();

      else if(pattern.length<3)
      {
        window.alert("The Search pattern length should be at least 3 charecters..!");
      }

      else{

        this.salesRepsService.searchReps(pattern).subscribe(
          data=>{
            console.log("Search works!!");
            this.salesReps=data;
          }
        )
      }
  }

  CreateSalesRep()
  {
    this.router.navigate(['create']);
  }

  getSalesReps()
  {
    this.salesRepsService.getSalesReps().subscribe(data => {
      
      console.log(" Sales Rep list Working..");
      this.salesReps=data
    });
  }

  getResult(limit:number)
  {
      this.limit=limit;
      // Calculate and Set Offset later.
      this.getSalesReps();
      
  }

  deleteSalesRep(id: number)
  {
    this.salesRepsService.deleteSalesRep(id).subscribe(
      (data)=>this.getSalesReps()
      );
  }

  updateSalesRep(rep){
    this.salesRepsService.rep=rep;
    this.router.navigate(['update']);
  }

}
