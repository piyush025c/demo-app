import { Component, OnInit } from '@angular/core';
import {SalesRepsService} from '../sales-reps.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-rep',
  templateUrl: './create-rep.component.html',
  styleUrls: ['./create-rep.component.css']
})
export class CreateRepComponent implements OnInit {


  constructor(private salesRepService: SalesRepsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(rep)
  {
    this.salesRepService.addSalesRep(rep).subscribe(
      data=>{
        console.log("POST working.. "+data);
        this.goBack();
      }
    )
  }

  goBack()
  {
    this.router.navigate(['']);
  }

}
