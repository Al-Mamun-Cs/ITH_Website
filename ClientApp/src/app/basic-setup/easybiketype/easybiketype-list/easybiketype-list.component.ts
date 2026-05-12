import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {EasyBikeType} from '../../models/EasyBikeType';
import {EasyBikeTypeService} from '../../service/EasyBikeType.service';
import { ConfirmService } from 'src/app/core/service/confirm.service';
import { Router } from '@angular/router';
import { MasterData } from 'src/assets/data/master-data';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-easybiketype-list',
  templateUrl: './easybiketype-list.component.html',
  styleUrls: ['./easybiketype-list.component.sass']
})
export class EasyBikeTypeListComponent implements OnInit {
  masterData = MasterData;
  ELEMENT_DATA: EasyBikeType[] = [];
  isLoading = false;
   groupArrays: { productionType: string; datas: any }[];

  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: this.masterData.paging.pageSize,
    length: 1
  }
  searchText="";
  permission: any;
  displayedColumns: string[] = [ 'sl','productionType','typeName','feesAmount', 'actions'];
  dataSource: MatTableDataSource<EasyBikeType> = new MatTableDataSource();

  selection = new SelectionModel<EasyBikeType>(true, []);

  
  constructor(private snackBar: MatSnackBar,private EasyBikeTypeService:EasyBikeTypeService,private router: Router,private confirmService: ConfirmService) { }
  
  ngOnInit() {
    this.getEasyBikeTypes();
  }
  
  getEasyBikeTypes() {
    this.isLoading = true;
    this.EasyBikeTypeService.getEasyBikeTypes(this.paging.pageIndex, this.paging.pageSize,this.searchText).subscribe(response => {
     

      this.dataSource.data = response.items; 
      this.permission = response.permission;
      this.paging.length = response.totalItemsCount    
      this.isLoading = false;
      console.log('Data Response:', this.dataSource.data); 
      //Group by category 
      const groups = this.dataSource.data.reduce((groups, datas) => {
        const schoolName = datas.productionType;
        if (!groups[schoolName]) {
          groups[schoolName] = [];
        }
        groups[schoolName].push(datas);
        return groups;
      }, {});

      // Edit: to add it in the array format instead
      this.groupArrays = Object.keys(groups).map((productionType) => {
        return {
          productionType,
          datas: groups[productionType],
        };
      });
      console.log(this.groupArrays,"row Data")
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
  addNew(){
    
  }
 
  pageChanged(event: PageEvent) {
    this.paging.pageIndex = event.pageIndex
    this.paging.pageSize = event.pageSize
    this.paging.pageIndex = this.paging.pageIndex + 1
    this.getEasyBikeTypes();
  }

  applyFilter(searchText: any){ 
    this.searchText = searchText;
    this.getEasyBikeTypes();
  } 
  
}
