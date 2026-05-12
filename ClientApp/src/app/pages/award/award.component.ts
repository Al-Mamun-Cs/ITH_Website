import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { AwardAndEvent } from '../../../../src/app/basic-setup/models/AwardAndEvent';
import { AwardAndEventService } from '../../../app/basic-setup/service/AwardAndEvent.service';
import { MasterData } from 'src/assets/data/master-data';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.sass']
})
export class AwardComponent implements OnInit {
  photoBaseUrl = environment.fileUrl;
  awards: AwardAndEvent[] = [];
  masterData = MasterData;
  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: 3,
    length: 1
  }
  searchText = "";
  activeIndex = 0;          // first visible image index
  visibleCount = 3; 
  autoScrollInterval?: any;
  dataSource: MatTableDataSource<AwardAndEvent> = new MatTableDataSource();

  selection = new SelectionModel<AwardAndEvent>(true, []);
  constructor(private AwardAndEventService: AwardAndEventService) { }

  ngOnInit(): void {
     this.getAwardAndEvents();
  }

  getAwardAndEvents() {
    this.AwardAndEventService.getAwardAndEvents(this.paging.pageIndex, this.paging.pageSize, this.searchText)
      .subscribe(response => {
        // Data dataSource e assign hocche
        this.awards = response.items;
        this.paging.length = response.totalItemsCount;
        console.log('AwardAndEvents data: for link page', this.awards);
      });
  }
  trackById(index: number, item: any): number {
  return item.awardAndEventId;
}

  addNew() { }

  pageChanged(event: PageEvent) {
    this.paging.pageSize = event.pageSize;
    this.paging.pageIndex = event.pageIndex + 1;
    this.getAwardAndEvents();
  }

  // ✅ Image logic fix
  getFullImageUrl(path: string): string {
    if (!path) {
      return 'assets/no-image.png';
    }
    // Jodi path er shuru te '/' thake ebong baseUrl er sheshe '/' thake, seta handle korar jonno:
    const baseUrl = this.photoBaseUrl.endsWith('/') ? this.photoBaseUrl : this.photoBaseUrl + '/';
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    
    return baseUrl + cleanPath;
  }



}
