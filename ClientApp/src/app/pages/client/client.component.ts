import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Supplier } from '../../../../src/app/basic-setup/models/Supplier';
import { SupplierService } from '../../../app/basic-setup/service/Supplier.service';
import { MasterData } from 'src/assets/data/master-data';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.sass']
})
export class ClientComponent implements OnInit {
  photoBaseUrl = environment.fileUrl;
  masterData = MasterData;
  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: 9,
    length: 1
  }
  searchText = "";
  dataSource: MatTableDataSource<Supplier> = new MatTableDataSource();

  selection = new SelectionModel<Supplier>(true, []);
  constructor(private SupplierService: SupplierService) { }

  ngOnInit(): void {
    this.getClients();
  }
  getClients() {

    this.SupplierService.getSuppliers(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(response => {
      console.log('date list', response);
      this.dataSource.data = response.items;
      this.paging.length = response.totalItemsCount
      console.log('Clients:', this.dataSource.data);
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
    this.getClients();
  }
  getEmployeeImage(path: string): string {
    if (!path) return 'assets/no-image.png'; // fallback
    return this.photoBaseUrl + path;
  }


}
