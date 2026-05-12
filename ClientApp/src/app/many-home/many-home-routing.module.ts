import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManyHomeComponent } from './many-home.component';

const routes: Routes = [
  { path: '', component: ManyHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManyHomeRoutingModule { }