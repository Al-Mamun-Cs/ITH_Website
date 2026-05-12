
import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PlatformLocation } from '@angular/common';
import { EasyBikeTypeService } from './../app/basic-setup/service/EasyBikeType.service';
import { WarehouseService } from './basic-setup/service/Warehouse.service';
import { MasterData } from 'src/assets/data/master-data';
import {Warehouse} from '../app/basic-setup/models/Warehouse';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Many_Website';
  mobileAboutOpen = false;
  mobileBusinessOpen = false;
  mobileCategoryOpen = false;
  mobileMediaOpen = false;
  mobileMediaCenterOpen = false;
  masterData = MasterData;
  // Menu State Logic
  isMobile = false;
  isMobileMenuOpen = false;
  isBrandsOpen = false;
  activeMenuTab = 'accessories';
  ELEMENT_DATA: Warehouse[] = [];
  categoryist: any[] = [];
  businessUnits: any[] = [];
  socialOpen = false;
  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: this.masterData.paging.pageSize,
    length: 1
  }
  aboutDropdownOpen = false;
  searchText = "";

  // FIX: Initialize with an empty string to satisfy TypeScript
  currentUrl: string = '';

  constructor(
    public _router: Router,
    public location: PlatformLocation, // Changed to public usually for template access, or keep private
    private spinner: NgxSpinnerService,
    private EasyBikeTypeService: EasyBikeTypeService,
    private WarehouseService: WarehouseService
  ) {
    this._router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.spinner.show();
        this.currentUrl = routerEvent.url.substring(
          routerEvent.url.lastIndexOf('/') + 1
        );
      }

      if (routerEvent instanceof NavigationEnd) {
        this.spinner.hide();
        // Moved scroll to top here so it happens ONLY when navigation finishes
        window.scrollTo(0, 0);
      }
    });
  }
  ngOnInit() {
    this.checkScreen();
    window.addEventListener('resize', () => {
      this.checkScreen();
    });
    this.getSelectedCategory();
    this.getWarehouseForMenu();
  }
  checkScreen() {
    this.isMobile = window.innerWidth <= 991; // Bootstrap lg breakpoint
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleBrands() {
    this.isBrandsOpen = !this.isBrandsOpen;
  }
  toggleAboutDropdown(state: boolean) {
  this.aboutDropdownOpen = state;
}
  setActiveTab(tab: string) {
    this.activeMenuTab = tab;
  }
  getWarehouseForMenu() {
    this.WarehouseService.getWarehouseForMenu(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(response => {
      console.log('Data business:', response);
      this.businessUnits = response.items;
      this.paging.length = response.totalItemsCount
      console.log('business:', this.businessUnits);
      

    })
  }
  
  getSelectedCategory() {
    this.EasyBikeTypeService.getSelectedCategory().subscribe(res => {
      this.categoryist = res
      console.log(this.categoryist, "this.categoryist")
    });
  }

  onSelect(categoryId: any) {
    if (categoryId) {
      const url = `http://217.217.254.11:8092/#/basic-setup/producttype-list/${categoryId}`;
      window.open(url, '_blank');
    }
  }
  navigateTo(url: string) {
    this._router.navigate([url]);
  }


}