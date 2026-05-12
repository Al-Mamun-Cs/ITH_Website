import { Component, ElementRef, HostListener, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ManyHomeService, BusinessUnit } from '../../service/ManyHome.service';
import { WarehouseService } from '../../../basic-setup/service/Warehouse.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Warehouse } from '../../../basic-setup/models/Warehouse';
import { MasterData } from 'src/assets/data/master-data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-business-units',
  templateUrl: './business-units.component.html',
  styleUrls: ['./business-units.component.scss']
})
export class BusinessUnitsComponent implements OnInit {
  photoBaseUrl = environment.fileUrl;
  masterData = MasterData;
  ELEMENT_DATA: Warehouse[] = [];
  isLoading = false;
  isExpanded: boolean = false;
  expandedIndex: number | null = null;
  currentIndex: number = 0;
  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: this.masterData.paging.pageSize,
    length: 1
  }
  searchText = "";
  permission: any;
  displayedColumns: string[] = ['sl', 'productionType', 'typeName', 'feesAmount', 'actions'];
  dataSource: MatTableDataSource<Warehouse> = new MatTableDataSource();

  selection = new SelectionModel<Warehouse>(true, []);
  activeIndex = 0;          // first visible image index
  visibleCount = 1;         // number of images visible
  autoScrollInterval?: any;

  constructor(private WarehouseService: WarehouseService) { }

  ngOnInit(): void {
    this.getWarehouses();
  }

  getWarehouses() {
    this.isLoading = true;
    this.WarehouseService.getWarehouses(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(response => {
      console.log('Data Response:', response);
      this.dataSource.data = response.items;
      this.paging.length = response.totalItemsCount
      this.isLoading = false;
      console.log('dataSource:', this.dataSource.data);
      if (this.dataSource.data.length > 0) {
        this.startAutoScroll();
      }

    })
  }
  toggleDescription() {
    this.isExpanded = !this.isExpanded;
  }
  toggleView(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  // Description 6 line er beshi kina check korar jonno (Approx logic)
  isLongText(text: string): boolean {
    return text && text.length > 350; // 350 characters approximate 6 lines
  }
  startAutoScroll() {
    const intervalTime = 9000; // 3 seconds per scroll
    if (this.autoScrollInterval) clearInterval(this.autoScrollInterval);

    this.autoScrollInterval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.dataSource.data.length;
    }, intervalTime);
  }

  getVisibleBusiness(): Warehouse[] {
    const brands = this.dataSource.data;
    if (!brands || brands.length === 0) return [];

    const visible: Warehouse[] = [];
    for (let i = 0; i < this.visibleCount; i++) {
      // Wrap around using modulo
      visible.push(brands[(this.activeIndex + i) % brands.length]);
    }
    return visible;
  }

 next() {
  if (this.dataSource.data.length === 0) return;
  this.currentIndex = (this.currentIndex + 1) % this.dataSource.data.length;
  this.activeIndex = this.currentIndex; // Sync with auto-scroll
}

// Prev button click logic
prev() {
  if (this.dataSource.data.length === 0) return;
  this.currentIndex = (this.currentIndex - 1 + this.dataSource.data.length) % this.dataSource.data.length;
  this.activeIndex = this.currentIndex; // Sync with auto-scroll
}
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.filteredData.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.filteredData.forEach((row) =>
        this.selection.select(row)
      );
  }
  addNew() {

  }

  pageChanged(event: PageEvent) {
    this.paging.pageIndex = event.pageIndex
    this.paging.pageSize = event.pageSize
    this.paging.pageIndex = this.paging.pageIndex + 1
    this.getWarehouses();
  }
  getEmployeeImage(path: string): string {
    if (!path) return 'assets/no-image.png';
    return this.photoBaseUrl + path;
  }


}
