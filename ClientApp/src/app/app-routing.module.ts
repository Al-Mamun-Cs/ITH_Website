import { Page404Component } from "./authentication/page404/page404.component";
import { AuthLayoutComponent } from "./layout/app-layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layout/app-layout/main-layout/main-layout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/guard/auth.guard";
import { Role } from "./core/models/role";
import { CompanyOverviewComponent } from './about/company-overview.component';
import { OurManagementComponent } from './about/our-management.component';
import { AwardsPageComponent } from './media/awards-page/awards-page.component';
import { NewsPageComponent } from './media/news-page/news-page.component';
import { BusinessProfileComponent } from './business/business-profile/business-profile.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CareerComponent } from './pages/career/career.component';
import { LocationComponent } from "./pages/location/location.component";
import { BrandComponent } from "./pages/brand/brand.component";
import { ClientComponent } from "./pages/client/client.component";
import { PressPageComponent } from "./media/press-page/press-page.component";
import { TVCPageComponent } from "./media/tvc-page/tvc-page.component";
import { OurEmployeeComponent } from "./about/our-employee.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { AwardComponent } from "./pages/award/award.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { FAQComponent } from "./pages/faq/faq.component";
import { PrivacyPolicyComponent } from "./pages/privacypolicy/privacypolicy.component";
import { RefundReturnComponent } from "./pages/refund&return/refund&return.component";
import { TermsConditionsComponent } from "./pages/terms&conditions/terms&conditions.component";


const routes: Routes = [
  
  // 1. Default route redirects to tmc
  { path: '', redirectTo: 'tmc', pathMatch: 'full' },
  
  // 2. The Lazy Loaded Module
  {
    path: 'tmc',
    loadChildren: () => import('./many-home/many-home.module').then(m => m.ManyHomeModule)
  },
  
  { path: 'about/overview', component: CompanyOverviewComponent },
  { path: 'about/management', component: OurManagementComponent },
  { path: 'about/employee', component: OurEmployeeComponent },

  // Media Corner
  { path: 'media/awards', component: AwardsPageComponent },
  { path: 'media/news', component: NewsPageComponent },
  { path: 'media/press', component: PressPageComponent},
  { path: 'media/tvc', component: TVCPageComponent},

  // Business Units (Dynamic Route)
  // This one component will handle "cables", "fan", "lighting", etc.
  { path: 'business/business/:warehouseId', component: BusinessProfileComponent },

  { path: 'contact', component: ContactUsComponent },
  { path: 'career', component: CareerComponent, runGuardsAndResolvers: 'always' },
  { path: 'location', component: LocationComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'client', component: ClientComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'award', component: AwardComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'privacypolicy', component: PrivacyPolicyComponent },
  { path: 'refund&return', component: RefundReturnComponent },
  { path: 'terms&conditions', component: TermsConditionsComponent },
  

  {
    path: 'basic-setup',
    loadChildren: () => import('./basic-setup/basic-setup.module')
      .then(m => m.BasicSetupModule)
  },
  
  // Wildcard (Redirect to Home)
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    scrollPositionRestoration: 'enabled', // Scrolls to top on navigation
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }