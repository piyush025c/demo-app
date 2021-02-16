import { Component, OnInit} from '@angular/core';
import {SalesRep} from '../sales-rep'
import {SalesRepsService} from '../sales-reps.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-rep',
  templateUrl: './edit-rep.component.html',
  styleUrls: ['./edit-rep.component.css']
})
export class EditRepComponent implements OnInit {

  rep:SalesRep={
    salesRepId:0,
    salesRepName:'Name',
    country:'Country',
    city: 'City',
    pincode:0,
    gender:'Gender'
  };

  constructor(private salesRepsService: SalesRepsService, private router: Router) { }

  ngOnInit(): void {

    this.rep=this.salesRepsService.rep;

    console.log("Sales Rep Id is "+ this.rep.salesRepId);
  }

  onSubmit(rep: SalesRep){

    this.salesRepsService.updateSalesRep(rep).subscribe(
      data=>{
        console.log("PUT working..."+ data);
        this.goBack();
        
      }
    )

    
  }

  goBack()
  {
    this.router.navigate(['']);
  }

}
