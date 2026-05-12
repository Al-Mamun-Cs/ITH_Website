import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BasicSetupRoutingModule } from './basic-setup-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import {EasyBikeTypeListComponent} from './easybiketype/easybiketype-list/easybiketype-list.component';
import {ProductTypeListComponent} from './producttype/producttype-list/producttype-list.component';
import { DivisionListComponent } from './division/division-list/division-list.component';
import { NewDivisionComponent } from './division/new-division/new-division.component';
import { DistrictListComponent } from './district/district-list/district-list.component';
import { NewDistrictComponent } from './district/new-district/new-district.component';
import { UpozilaListComponent } from './upozila/upozila-list/upozila-list.component';
import { NewUpozilaComponent } from './upozila/new-upozila/new-upozila.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { NewCountryComponent } from './country/new-country/new-country.component';
import { NewBankComponent } from './bank/new-bank/new-bank.component';
import { BankListComponent } from './bank/bank-list/bank-list.component';

@NgModule({
  declarations: [
    
    EasyBikeTypeListComponent,
    ProductTypeListComponent,
    DivisionListComponent,
    NewDivisionComponent,
    DistrictListComponent,
    NewDistrictComponent,
    UpozilaListComponent,
    NewUpozilaComponent,
    BrandListComponent,
    CountryListComponent,
    NewCountryComponent,
    BankListComponent,
    NewBankComponent,

    

  ],
  imports: [
    CommonModule,
    BasicSetupRoutingModule,
    CommonModule,
    FormsModule,  
    ReactiveFormsModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MaterialFileInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatCheckboxModule,
    
  ]
})
export class BasicSetupModule { }
