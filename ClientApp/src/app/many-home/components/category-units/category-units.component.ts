import { Component, ElementRef, HostListener, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ManyHomeService, BusinessUnit } from '../../service/ManyHome.service';
import { EasyBikeTypeService } from '../../../basic-setup/service/EasyBikeType.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EasyBikeType } from '../../../basic-setup/models/EasyBikeType';
import { MasterData } from 'src/assets/data/master-data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-units',
  templateUrl: './category-units.component.html',
  styleUrls: ['./category-units.component.scss']
})
export class CategoryUnitsComponent implements OnInit {
  photoBaseUrl = environment.fileUrl;
  masterData = MasterData;
  ELEMENT_DATA: EasyBikeType[] = [];
  product: EasyBikeType[] = [];
  isLoading = false;
  isExpanded: boolean = false;
  expandedIndex: number | null = null;
  currentIndex: number = 0;
  duplicatedEvents: EasyBikeType[] = [];

  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: this.masterData.paging.pageSize,
    length: 1
  }
  searchText = "";
  permission: any;
  displayedColumns: string[] = ['sl', 'productionType', 'typeName', 'feesAmount', 'actions'];
  dataSource: MatTableDataSource<EasyBikeType> = new MatTableDataSource();

  selection = new SelectionModel<EasyBikeType>(true, []);
  activeIndex = 0;          
  visibleCount = 1;         
  autoScrollInterval?: any;

  isMobile = false;

  isTransitioning = true;

  constructor(private EasyBikeTypeService: EasyBikeTypeService) {   }

  ngOnInit(): void {
     this.setViewMode();
    this.getEasyBikeTypes();
  }

  getEasyBikeTypes() {
    this.isLoading = true;
    this.EasyBikeTypeService.getEasyBikeTypes(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(response => {
      console.log('Category Data Response:', response);
      this.dataSource.data = response.items;
      this.product = response.items;
      this.paging.length = response.totalItemsCount
      this.isLoading = false;
      console.log('dataSource:', this.dataSource.data);
      if (this.product.length > 0) {
        this.duplicatedEvents = [...this.product, ...this.product];
        this.startAutoScroll();

        console.log('Category data product', this.duplicatedEvents);
      }

    })
  }

  setViewMode() {
    const width = window.innerWidth;

    if (width <= 767) {
      this.visibleCount = 1; // mobile
    } else {
      this.visibleCount = 3; // desktop → 3 images
    }
  }


  // 🔥 auto scroll
  startAutoScroll() {
    const intervalTime = 2500;

    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }

    this.autoScrollInterval = setInterval(() => {
      this.next();
    }, intervalTime);
  }

  // 👉 NEXT
  next() {
    if (this.duplicatedEvents.length === 0) return;

    this.activeIndex++;
    this.isTransitioning = true;

    if (this.activeIndex === this.product.length) {
      setTimeout(() => {
        this.isTransitioning = false;
        this.activeIndex = 0;

        setTimeout(() => {
          this.isTransitioning = true;
        }, 50);

      }, 700);
    }
  }

  // 👉 PREV
  prev() {
    if (this.duplicatedEvents.length === 0) return;

    this.isTransitioning = true;

    if (this.activeIndex <= 0) {
      this.activeIndex = this.product.length;
    }

    this.activeIndex--;
  }

  ngOnDestroy() {
    //super.ngOnDestroy();

    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }


}
