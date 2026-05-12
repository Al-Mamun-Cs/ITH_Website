import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MasterData } from 'src/assets/data/master-data';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  photoBaseUrl = environment.fileUrl;
  masterData = MasterData;
  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: 9,
    length: 1
  }
  searchText = "";
  
  ngOnInit(): void {
  }
  


}
