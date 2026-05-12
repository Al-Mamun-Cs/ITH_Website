import { Component, OnDestroy, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Supplier } from '../../../../app/basic-setup/models/Supplier';
import { SupplierService } from '../../../../app/basic-setup/service/Supplier.service';
import { MasterData } from 'src/assets/data/master-data';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-many-clients',
  templateUrl: './many-clients.component.html',
  styleUrls: ['./many-clients.component.scss']
})
export class ManyClientsComponent implements OnInit, OnDestroy {
  photoBaseUrl = environment.fileUrl;
  masterData = MasterData;
  linkColor = '#11205F';
  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: this.masterData.paging.pageSize,
    length: 1
  };
  duplicatedData: Supplier[] = [];
  isTransitioning = true;

  dataSource: MatTableDataSource<Supplier> = new MatTableDataSource();
  selection = new SelectionModel<Supplier>(true, []);

  // Carousel variables
  activeIndex = 0;          // first visible image index
  visibleCount = 4;         // number of images visible
  autoScrollInterval?: any;

  searchText = "";

  constructor(private SupplierService: SupplierService) { }

  ngOnInit(): void {
    this.setVisibleCount();
    this.getSuppliers();
    window.addEventListener('resize', this.setVisibleCount.bind(this));
  }

  ngOnDestroy(): void {
    if (this.autoScrollInterval) clearInterval(this.autoScrollInterval);
  }

  setVisibleCount() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 767) {
      this.visibleCount = 1; // 📱 Mobile
    } else {
      this.visibleCount = 4; // 💻 Desktop
    }
  }

  getSuppliers() {
    this.SupplierService.getSuppliers(this.paging.pageIndex, this.paging.pageSize, this.searchText)
      .subscribe(response => {
        this.dataSource.data = response.items;
        this.paging.length = response.totalItemsCount;
        console.log('Clients data:', this.dataSource.data);
        this.duplicatedData = [...this.dataSource.data, ...this.dataSource.data];
        if (this.dataSource.data.length > 0) {
          this.startAutoScroll();
        }
      });
  }

  // ---------------- Carousel logic ----------------
  startAutoScroll() {
    const intervalTime = 3000; // 3 seconds
    if (this.autoScrollInterval) clearInterval(this.autoScrollInterval);

    this.autoScrollInterval = setInterval(() => {
      this.next();
    }, intervalTime);
  }

  getVisibleBrands(): Supplier[] {
    const brands = this.dataSource.data;
    if (!brands || brands.length === 0) return [];

    const visible: Supplier[] = [];
    for (let i = 0; i < this.visibleCount; i++) {
      // Wrap around using modulo
      visible.push(brands[(this.activeIndex + i) % brands.length]);
    }
    return visible;
  }

  next() {
    if (this.duplicatedData.length === 0) return;
     this.isTransitioning = true;
  this.activeIndex++;
    // Jodi shesh mathay pouche jay, tobe prothome fire jabe (Right to Left loop)
    if (this.activeIndex >= this.dataSource.data.length) {
    setTimeout(() => {
      this.isTransitioning = false; // transition off
      this.activeIndex = 0;         // jump silently
    }, 700); // same as CSS transition time
  }
  }

  prev() {
  if (this.duplicatedData.length === 0) return;

  this.isTransitioning = true;

  if (this.activeIndex <= 0) {
    this.activeIndex = this.dataSource.data.length;
  }

  this.activeIndex--;
}

  // ---------------- Existing Material table logic ----------------
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.filteredData.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }

  addNew() { }

  pageChanged(event: PageEvent) {
    this.paging.pageIndex = event.pageIndex;
    this.paging.pageSize = event.pageSize;
    this.paging.pageIndex = this.paging.pageIndex + 1;
    this.getSuppliers();
  }

  getEmployeeImage(path: string): string {
    if (!path) return 'assets/no-image.png';
    return this.photoBaseUrl + path;
  }
}
