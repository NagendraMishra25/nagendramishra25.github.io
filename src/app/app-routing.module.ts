import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SecuritiesComponent } from './components/securities/securities.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'securities', component: SecuritiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
