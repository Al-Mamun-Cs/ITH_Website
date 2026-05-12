import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../basic-setup/models/Employee';
import { EmployeeService } from '../basic-setup/service/Employee.service';
import { ConfirmService } from 'src/app/core/service/confirm.service';
import { Router } from '@angular/router';
import { MasterData } from 'src/assets/data/master-data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

interface BoardMember {
  id: string;
  name: string;
  designation: string;
  company: string;
  img: string;
  bio: string;
}

@Component({
  selector: 'app-our-employee',
  templateUrl: './our-employee.component.html',
  styleUrls: ['./our-employee.component.scss']
})
export class OurEmployeeComponent implements OnInit {
  photoBaseUrl = environment.fileUrl;
  masterData = MasterData;
  ELEMENT_DATA: Employee[] = [];
  isLoading = false;

  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: 50,
    length: 1
  }
  searchText = "";
  permission: any;
  displayedColumns: string[] = ['sl', 'fullName', 'shortName', 'actions'];
  dataSource: MatTableDataSource<Employee> = new MatTableDataSource();

  selection = new SelectionModel<Employee>(true, []);


  constructor(private snackBar: MatSnackBar, private EmployeeService: EmployeeService, private router: Router, private confirmService: ConfirmService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.isLoading = true;
    this.EmployeeService.getEmployees(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(response => {

      this.dataSource.data = response.items;
      this.permission = response.permission;
      this.paging.length = response.totalItemsCount
      this.isLoading = false;
      console.log('Employee data', this.dataSource.data);
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
    this.getEmployees();
  }

  applyFilter(searchText: any) {
    this.searchText = searchText;
    this.getEmployees();
  }

  getEmployeeImage(path: string): string {
    if (!path) return 'assets/no-image.png'; // fallback
    return this.photoBaseUrl + path;
  }
  
}