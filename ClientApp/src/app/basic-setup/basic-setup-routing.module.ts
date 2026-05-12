import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from '../authentication/page404/page404.component';

import {EasyBikeTypeListComponent} from './easybiketype/easybiketype-list/easybiketype-list.component';
import { ProductTypeListComponent } from './producttype/producttype-list/producttype-list.component';
import { DivisionListComponent } from './division/division-list/division-list.component';
import { NewDivisionComponent } from './division/new-division/new-division.component';
import { DistrictListComponent } from './district/district-list/district-list.component';
import { NewDistrictComponent } from './district/new-district/new-district.component';
import { UpozilaListComponent } from './upozila/upozila-list/upozila-list.component';
import { NewUpozilaComponent } from './upozila/new-upozila/new-upozila.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { NewCountryComponent } from './country/new-country/new-country.component';
import { BankListComponent } from './bank/bank-list/bank-list.component';
import { NewBankComponent } from './bank/new-bank/new-bank.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },




   { 
    path: 'country-list',
    component: CountryListComponent,
  },
  { path: 'update-country/:countryId', 
  component:  NewCountryComponent,
  },
  {
    path: 'add-country',
    component: NewCountryComponent,
  },

  
  { 
    path: 'bank-list',
    component: BankListComponent,
  },
  { path: 'update-bank/:bankId', 
  component:  NewBankComponent,
  },
  {
    path: 'add-bank',
    component: NewBankComponent,
  },

  { 
    path: 'brand-list',
    component: BrandListComponent,
  },
  

  {
    path: 'division-list',
    component: DivisionListComponent,
  },
  { path: 'update-division/:divisionId', 
  component:  NewDivisionComponent,
  },
  {
    path: 'add-division',
    component: NewDivisionComponent,
  },

  {
    path: 'district-list',
    component: DistrictListComponent,
  },
  { path: 'update-district/:districtId', 
  component:  NewDistrictComponent,
  },
  {
    path: 'add-district',
    component: NewDistrictComponent,
  },

   {
    path: 'upozila-list',
    component: UpozilaListComponent,
  },
  { path: 'update-upozila/:upazilaId', 
  component:  NewUpozilaComponent,
  },
  {
    path: 'add-upozila',
    component: NewUpozilaComponent,
  },

  {
    path: 'producttype-list',
    component: ProductTypeListComponent,
  },

  

  {
    path: 'easybiketype-list',
    component: EasyBikeTypeListComponent,
  },
  






  
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BasicSetupRoutingModule { }
