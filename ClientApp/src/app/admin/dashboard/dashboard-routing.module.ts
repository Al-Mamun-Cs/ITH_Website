// import { DashboardComponent as studentDashboard } from './../../student/dashboard/dashboard.component';
// import { DashboardComponent as teacherDashboard } from './../../teacher/dashboard/dashboard.component';
// import { DashboardComponent as employeeDashboard } from './../../employee/dashboard/dashboard.component';
// import { DashboardComponent as userDashboard } from './../../user-dashboard/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },


  {
    path: 'main',
    component: MainComponent,
  },

  


  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
