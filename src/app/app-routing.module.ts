import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchdetailsComponent } from './COMPONENTS/matchdetails/matchdetails.component';
import { TableComponent } from './COMPONENTS/table/table.component';

const routes: Routes = [
  {path:'', component:TableComponent},
  {path:'matchdetails', component:MatchdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
