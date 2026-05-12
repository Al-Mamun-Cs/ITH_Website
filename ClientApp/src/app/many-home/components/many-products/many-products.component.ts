import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ProductType } from '../../../../app/basic-setup/models/ProductType';
import { ProductTypeService } from '../../../../app/basic-setup/service/ProductType.service';
import { MasterData } from 'src/assets/data/master-data';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-many-products',
	templateUrl: './many-products.component.html',
	styleUrls: ['./many-products.component.scss']
})
export class ManyProductsComponent implements OnInit, OnDestroy {
	photoBaseUrl = environment.fileUrl;
	masterData = MasterData;
	linkColor = 'white';
	paging = {
		pageIndex: this.masterData.paging.pageIndex,
		pageSize: this.masterData.paging.pageSize,
		length: 1
	};

	dataSource: MatTableDataSource<ProductType> = new MatTableDataSource();
	selection = new SelectionModel<ProductType>(true, []);

	// Carousel variables
	activeIndex = 0;          // first visible image index
	visibleCount = 3;         // number of images visible
	autoScrollInterval?: any;
	productData: any[] = [];

	searchText = "";
	warehouseId: any;

	constructor(private ProductTypeService: ProductTypeService, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.warehouseId = params['warehouseId'];
			console.log('Selected warehouseId:', this.warehouseId);
			this.getProductTypes();
		});
	}

	ngOnDestroy(): void {
		if (this.autoScrollInterval) clearInterval(this.autoScrollInterval);
	}

	getProductTypes() {
		this.ProductTypeService.getProductTypes(this.paging.pageIndex, this.paging.pageSize, this.searchText, this.warehouseId)
			.subscribe(response => {
				this.dataSource.data = response.items;
				this.paging.length = response.totalItemsCount;
				console.log('Get products for business units:', this.dataSource.data);
				this.productData = [...this.dataSource.data, ...this.dataSource.data];
				if (this.dataSource.data.length > 0) {
					this.startAutoScroll();
				}
			});
	}
	updateDefaultImage(event: any) {
		event.target.src = 'assets/no-image.png';
	}

	// ---------------- Carousel logic ----------------
	startAutoScroll() {
		const intervalTime = 3000; // 3 seconds per scroll
		if (this.autoScrollInterval) clearInterval(this.autoScrollInterval);

		this.autoScrollInterval = setInterval(() => {
			this.activeIndex = (this.activeIndex + 1) % this.dataSource.data.length;
		}, intervalTime);
	}

	getVisibleBrands(): ProductType[] {
		const brands = this.dataSource.data;
		if (!brands || brands.length === 0) return [];

		const visible: ProductType[] = [];
		for (let i = 0; i < this.visibleCount; i++) {
			// Wrap around using modulo
			visible.push(brands[(this.activeIndex + i) % brands.length]);
		}
		return visible;
	}

	next() {
		if (this.productData.length === 0) return;

		if (this.activeIndex >= this.dataSource.data.length - this.visibleCount) {
			this.activeIndex = 0;
		} else {
			this.activeIndex++;
		}
	}

	// PREV
	prev() {
		if (this.dataSource.data.length === 0) return;

		if (this.activeIndex <= 0) {
			this.activeIndex = this.dataSource.data.length - this.visibleCount;
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
		this.getProductTypes();
	}

	getEmployeeImage(path: string): string {
		if (!path) return 'assets/no-image.png';
		// check if path is already a full URL
		if (path.startsWith('http')) return path;
		return this.photoBaseUrl + path;
	}

}
