import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TvcVideo } from '../../basic-setup/models/TvcVideo';
import { TvcVideoService } from '../../basic-setup/service/TvcVideo.service';
import { ConfirmService } from 'src/app/core/service/confirm.service';
import { Router } from '@angular/router';
import { MasterData } from 'src/assets/data/master-data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tvc-page',
  templateUrl: './tvc-page.component.html',
  styleUrls: ['./tvc-page.component.scss']
})
export class TVCPageComponent implements OnInit {
  photoBaseUrl = environment.fileUrl;
  masterData = MasterData;
  ELEMENT_DATA: TvcVideo[] = [];
  isLoading = false;

  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: 50,
    length: 1
  }
  searchText = "";
  permission: any;
  displayedColumns: string[] = ['sl', 'fullName', 'shortName', 'actions'];
  dataSource: MatTableDataSource<TvcVideo> = new MatTableDataSource();

  selection = new SelectionModel<TvcVideo>(true, []);


  constructor(private snackBar: MatSnackBar, private TvcVideoService: TvcVideoService, private router: Router, private confirmService: ConfirmService) { }

  ngOnInit() {
    this.getTvcVideos();
  }

  getTvcVideos() {
    this.isLoading = true;
    this.TvcVideoService.getTvcVideos(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(response => {

      this.dataSource.data = response.items;
      this.permission = response.permission;
      this.paging.length = response.totalItemsCount
      this.isLoading = false;
      console.log('AVC data', this.dataSource.data);
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
    this.getTvcVideos();
  }

  applyFilter(searchText: any) {
    this.searchText = searchText;
    this.getTvcVideos();
  }

  getEmployeeImage(path: string): string {
    if (!path) return 'assets/no-image.png'; // fallback
    return this.photoBaseUrl + path;
  }

 forcePlayVideo(videoId: string, brand: any) {
  const videoElement = document.getElementById(videoId) as HTMLVideoElement;
  if (videoElement) {
    videoElement.play()
      .then(() => {
        brand.isPlaying = true; // প্লে সফল হলে কন্ট্রোল বার দেখাবে
      })
      .catch(error => {
        console.error("ভিডিও প্লে হতে সমস্যা হচ্ছে:", error);
        // অনেক সময় ব্রাউজার অটো-প্লে ব্লক করে, সেক্ষেত্রে মিউট করে ট্রাই করা যায়
        videoElement.muted = true;
        videoElement.play();
        brand.isPlaying = true;
      });
  }
}

 toggleShareMenu(brand: any) {
  // অন্য সব ভিডিওর শেয়ার মেনু বন্ধ করে শুধু এটি ওপেন করবে
  brand.showShareMenu = !brand.showShareMenu;
}

shareToFacebook(brand: any) {
  const url = encodeURIComponent(brand.videoDoc || window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  brand.showShareMenu = false; // শেয়ার করার পর মেনু বন্ধ হয়ে যাবে
}

shareToTwitter(brand: any) {
  const url = encodeURIComponent(brand.videoDoc || window.location.href);
  const text = encodeURIComponent(brand.name || 'Check this out!');
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  brand.showShareMenu = false; // শেয়ার করার পর মেনু বন্ধ হয়ে যাবে
}

}
