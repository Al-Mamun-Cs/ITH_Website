

import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageLoaderComponent } from './layout/page-loader/page-loader.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { fakeBackendProvider } from './core/interceptor/fake-backend';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DatePipe } from '@angular/common';
import {jsPDF} from 'jspdf';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ClickOutsideModule } from 'ng-click-outside';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';
import { FontComponent } from './font/font.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QuillModule } from 'ngx-quill';
import { NgxBarcodeModule } from 'ngx-barcode';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { CompanyOverviewComponent } from './about/company-overview.component';
import { OurManagementComponent } from './about/our-management.component';
import { AwardsPageComponent } from './media/awards-page/awards-page.component';
import { NewsPageComponent } from './media/news-page/news-page.component';
import { BusinessProfileComponent } from './business/business-profile/business-profile.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CareerComponent } from './pages/career/career.component';
import { LocationComponent } from './pages/location/location.component';
import { BrandComponent } from './pages/brand/brand.component';
import { ClientComponent } from './pages/client/client.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PressPageComponent } from './media/press-page/press-page.component';
import { TVCPageComponent } from './media/tvc-page/tvc-page.component';
import { ManyHomeModule } from './many-home/many-home.module';
import { OurEmployeeComponent } from './about/our-employee.component';
import { AwardComponent } from './pages/award/award.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageLoaderComponent,
    SidebarComponent,
    RightSidebarComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    ConfirmDialogComponent,
    FontComponent,
    CompanyOverviewComponent,
    OurManagementComponent,
    OurEmployeeComponent,
    AwardsPageComponent,
    NewsPageComponent,
    BusinessProfileComponent,
    ContactUsComponent,
    AwardComponent,
    CareerComponent,
    LocationComponent,
    BrandComponent,
    ClientComponent,
    PressPageComponent,
    TVCPageComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    ClickOutsideModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatPaginatorModule,
    ManyHomeModule,
    
    MaterialFileInputModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    MatSnackBarModule,
    MatCheckboxModule,
    CoreModule,
    SharedModule,
    NgxBarcodeModule,
    QuillModule.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    DatePipe
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
