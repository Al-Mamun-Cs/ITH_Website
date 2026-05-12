import { Component, OnDestroy, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Brand } from '../../../../app/basic-setup/models/Brand';
import { BrandService } from '../../../../app/basic-setup/service/Brand.service';
import { MasterData } from 'src/assets/data/master-data';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-many-brands',
  templateUrl: './many-brands.component.html',
  styleUrls: ['./many-brands.component.scss']
})
export class ManyBrandsComponent implements OnInit, OnDestroy {
  photoBaseUrl = environment.fileUrl;
  masterData = MasterData;
  duplicatedBrands: Brand[] = [];
isTransitioning = true;
  linkColor = 'white';
  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: this.masterData.paging.pageSize,
    length: 1
  };

  dataSource: MatTableDataSource<Brand> = new MatTableDataSource();
  selection = new SelectionModel<Brand>(true, []);

  // Carousel variables
  activeIndex = 0;          // first visible image index
  visibleCount = 3;         // number of images visible
  autoScrollInterval?: any;
  productData: any[] = [];

  searchText = "";

  constructor(private BrandService: BrandService) { }

  ngOnInit(): void {
    this.setVisibleCount();
    this.getBrands();
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
      this.visibleCount = 3; // 💻 Desktop
    }
  }
  getBrands() {
  this.BrandService.getBrands(this.paging.pageIndex, this.paging.pageSize, this.searchText)
    .subscribe(response => {
      this.dataSource.data = response.items;
      this.paging.length = response.totalItemsCount;

      if (this.dataSource.data.length > 0) {
        // ডেটাকে ডুপ্লিকেট করছি যাতে লুপ চলতেই থাকে
        this.duplicatedBrands = [...this.dataSource.data, ...this.dataSource.data];
        this.startAutoScroll();
      }
    });
}

  // ---------------- Carousel logic ----------------
  startAutoScroll() {
  const intervalTime = 4000; // 4 seconds
  if (this.autoScrollInterval) clearInterval(this.autoScrollInterval);

  this.autoScrollInterval = setInterval(() => {
    this.next();
  }, intervalTime);
}

  getVisibleBrands(): Brand[] {
    const brands = this.dataSource.data;
    if (!brands || brands.length === 0) return [];

    const visible: Brand[] = [];
    for (let i = 0; i < this.visibleCount; i++) {
      // Wrap around using modulo
      visible.push(brands[(this.activeIndex + i) % brands.length]);
    }
    return visible;
  }

  next() {
  if (this.dataSource.data.length === 0) return;

  this.activeIndex++;
  this.isTransitioning = true;

  // যখন আমরা প্রথম সেটের শেষ আইটেমে পৌঁছাবো
  if (this.activeIndex === this.dataSource.data.length) {
    // ০.৭ সেকেন্ড অপেক্ষা করবো (ট্রানজিশন শেষ হওয়া পর্যন্ত)
    setTimeout(() => {
      this.isTransitioning = false; // এনিমেশন বন্ধ
      this.activeIndex = 0;        // নিঃশব্দে শুরুতে জাম্প (ইউজার বুঝবে না)
      
      // আবার এনিমেশন চালু করার জন্য ছোট একটি ডিলে
      setTimeout(() => {
        this.isTransitioning = true;
      }, 50);
    }, 700); // এই টাইমটি আপনার CSS transition 0.7s এর সাথে মিল রেখে
  }
}

prev() {
  if (this.dataSource.data.length === 0) return;

  if (this.activeIndex <= 0) {
    this.isTransitioning = false;
    this.activeIndex = this.dataSource.data.length;
    setTimeout(() => {
      this.isTransitioning = true;
      this.activeIndex--;
    }, 50);
  } else {
    this.activeIndex--;
  }
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
    this.getBrands();
  }

  getEmployeeImage(path: string): string {
    if (!path) return 'assets/no-image.png';
    return this.photoBaseUrl + path;
  }
}
