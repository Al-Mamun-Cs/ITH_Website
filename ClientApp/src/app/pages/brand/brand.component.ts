import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { EasyBikeType } from '../../../../src/app/basic-setup/models/EasyBikeType';
import { EasyBikeTypeService } from '../../../app/basic-setup/service/EasyBikeType.service';
import { MasterData } from 'src/assets/data/master-data';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.sass']
})
export class BrandComponent implements OnInit {
  photoBaseUrl = environment.fileUrl;
  masterData = MasterData;
  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: 9,
    length: 1
  }
  searchText = "";
  dataSource: MatTableDataSource<EasyBikeType> = new MatTableDataSource();

  selection = new SelectionModel<EasyBikeType>(true, []);
  constructor(private EasyBikeTypeService: EasyBikeTypeService) { }

  ngOnInit(): void {
    this.getEasyBikeTypes();
  }
  getEasyBikeTypes() {

    this.EasyBikeTypeService.getEasyBikeTypes(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(response => {
      console.log('date list', response);
      this.dataSource.data = response.items;
      this.paging.length = response.totalItemsCount
      console.log(' EasyBikeType Product :', this.dataSource.data);
    })
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
    this.getEasyBikeTypes();
  }
  getEmployeeImage(path: string): string {
    if (!path) return 'assets/no-image.png'; // fallback
    return this.photoBaseUrl + path;
  }


}
