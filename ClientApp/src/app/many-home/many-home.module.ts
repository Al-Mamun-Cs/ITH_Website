import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManyHomeRoutingModule } from './many-home-routing.module';
import { ManyHomeComponent } from './many-home.component';
import { BusinessUnitsComponent } from './components/business-units/business-units.component';
import { StatsComponent } from './components/stats/stats.component';
import { ManyBrandsComponent } from './components/many-brands/many-brands.component';
import { ManyAwardsComponent } from './components/many-awards/many-awards.component';
import { ManyClientsComponent } from './components/many-clients/many-clients.component';
import { ManyProductsComponent } from './components/many-products/many-products.component';
import { ManyFooterComponent } from './components/many-footer/many-footer.component';
import { SharedModule } from '../shared/shared.module';
import { ManyEventsComponent } from './components/many-events/many-events.component';
import { CategoryUnitsComponent } from './components/category-units/category-units.component';
import { ManyCertificationsComponent } from './components/many-certifications/many-certifications.component';
import { MembershipComponent } from './components/membership/membership.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ServicesComponent } from './components/services/services.component';
import { SisterConcernComponent } from './components/sisterconcern/sisterconcern.component';


@NgModule({
  declarations: [
    ManyHomeComponent,
    CategoryUnitsComponent,
    BusinessUnitsComponent,
    StatsComponent,
    ManyProductsComponent,
    ManyBrandsComponent,
    ManyAwardsComponent,
    ManyClientsComponent,
    ManyFooterComponent,
    ManyEventsComponent,
    ManyCertificationsComponent,
    MembershipComponent,
    PartnersComponent,
    ServicesComponent,
    SisterConcernComponent,
  ],
  imports: [
    CommonModule,
    ManyHomeRoutingModule,
    SharedModule
  ],
  exports: [
    ManyProductsComponent 
  ]
})
export class ManyHomeModule { }