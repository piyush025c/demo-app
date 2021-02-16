import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRepComponent} from './create-rep/create-rep.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { EditRepComponent } from './edit-rep/edit-rep.component'


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path:'create', component: CreateRepComponent},
  { path:'update', component: EditRepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
