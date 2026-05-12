import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; // 1. Import Params
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { MasterData } from 'src/assets/data/master-data';
import { Warehouse } from '../../basic-setup/models/Warehouse';
import { WarehouseService } from '../../basic-setup/service/Warehouse.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.scss'] // Note: check if your file is .scss or .sass
})
export class BusinessProfileComponent implements OnInit {
  photoBaseUrl = environment.fileUrl;
  ELEMENT_DATA: Warehouse[] = [];
  masterData = MasterData;
  businessUnits: any[] = [];
  loading = false;
  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: this.masterData.paging.pageSize,
    length: 1
  }
  searchText = "";
  warehouseId: any;
  isMobile = false;
  isExpanded: { [key: number]: boolean } = {};

  constructor(
    public _router: Router,
    public location: PlatformLocation,
    private WarehouseService: WarehouseService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.setMobileView();
    window.addEventListener('resize', this.setMobileView.bind(this));
    this.route.params.subscribe(params => {
      this.warehouseId = +params['warehouseId'];
      console.log('Selected warehouseId:', this.warehouseId);

      // Reload data whenever warehouseId changes
      this.getWarehouseListByWarehouseId();
    });
  }
  setMobileView() {
    this.isMobile = window.innerWidth <= 767;
  }
  toggleView(index: number) {
    this.isExpanded[index] = !this.isExpanded[index];
  }
  getWarehouseListByWarehouseId() {
    this.loading = true;
    this.WarehouseService.getWarehouseListByWarehouseId(this.paging.pageIndex, this.paging.pageSize, this.searchText, this.warehouseId).subscribe(response => {
      console.log('Data business page:', response);
      this.businessUnits = response.items;
      this.paging.length = response.totalItemsCount
      console.log('business Page:', this.businessUnits);
      this.loading = false;

    })
  }
  getEmployeeImage(path: string): string {
    if (!path) return 'assets/no-image.png';
    return this.photoBaseUrl + path;
  }
}