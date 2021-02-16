import { Component, OnInit } from '@angular/core';
import { SalesRep } from '../sales-rep'
import { SalesRepsService } from '../sales-reps.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sales-rep-list',
  templateUrl: './sales-rep-list.component.html',
  styleUrls: ['./sales-rep-list.component.css']
})
export class SalesRepListComponent implements OnInit {

  salesReps:SalesRep[];
  offset=0;
  limit=5;

  constructor(private salesRepsService: SalesRepsService, private router: Router) { }

  ngOnInit(): void {

    this.getSalesReps(this.offset,this.limit);
  }

  CreateSalesRep()
  {
    this.router.navigate(['create']);
  }

  getSalesReps(offset,limit)
  {
    this.salesRepsService.getSalesReps(offset,limit).subscribe(data => {
      
      console.log(" Sales Rep list Working..");
      this.salesReps=data
    });
  }

  getResult(limit:number)
  {
      this.limit=limit;
      // Calculate and Set Offset later.
      this.getSalesReps(this.offset,this.limit);
      
  }

  deleteSalesRep(id: number)
  {
    this.salesRepsService.deleteSalesRep(id).subscribe(
      (data)=>this.getSalesReps(this.offset,this.limit)
      );
  }

  updateSalesRep(rep){
    this.salesRepsService.rep=rep;
    this.router.navigate(['update']);
  }

}
