import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManyHomeService, Event } from '../../service/ManyHome.service';
import { UnsubscribeOnDestroyAdapter } from '../../../shared/UnsubscribeOnDestroyAdapter';
import { MasterData } from 'src/assets/data/master-data';
import { MatTableDataSource } from '@angular/material/table';
import { AwardAndEvent } from '../../../basic-setup/models/AwardAndEvent';
import { AwardAndEventService } from '../../../basic-setup/service/AwardAndEvent.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-many-events',
  templateUrl: './many-events.component.html',
  styleUrls: ['./many-events.component.scss']
})
export class ManyEventsComponent extends UnsubscribeOnDestroyAdapter implements OnInit, OnDestroy {
   photoBaseUrl = environment.fileUrl;
  events: AwardAndEvent[] = [];
  masterData = MasterData;
  linkColor='#11205F'
  duplicatedEvents: AwardAndEvent[] = [];
  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: 50,
    length: 1
  }
  isLoading = false;
  searchText = "";
  permission: any;

  activeIndex = 0;
  visibleCount = 1;
  isMobile = false;

  autoScrollInterval: any;
  isTransitioning = true;

  dataSource: MatTableDataSource<AwardAndEvent> = new MatTableDataSource();

  constructor(private service: ManyHomeService, private AwardAndEventService: AwardAndEventService) {
    super();
  }

  ngOnInit(): void {
    this.setViewMode();
    this.getEvents();


    window.addEventListener('resize', this.setViewMode.bind(this));
  }

  getEvents() {
    this.isLoading = true;

    this.AwardAndEventService.getEvents(
      this.paging.pageIndex,
      this.paging.pageSize,
      this.searchText
    ).subscribe(response => {

      this.dataSource.data = response.items;
      this.events = response.items;   // 🔥 IMPORTANT FIX

      this.permission = response.permission;
      this.paging.length = response.totalItemsCount;
      this.isLoading = false;

      console.log('Award data scroll', this.dataSource.data);

      // 🔥 carousel setup
      if (this.events.length > 0) {
        this.duplicatedEvents = [...this.events, ...this.events];
        this.startAutoScroll();

        console.log('Award data duplicatedEvents', this.duplicatedEvents);
      }
    });
  }


  // 📱 responsive
  setViewMode() {
    const width = window.innerWidth;

    if (width <= 767) {
      this.visibleCount = 1; // mobile
    } else {
      this.visibleCount = 3; // desktop → 3 images
    }
  }


  // 🔥 auto scroll
  startAutoScroll() {
    const intervalTime = 2500;

    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }

    this.autoScrollInterval = setInterval(() => {
      this.next();
    }, intervalTime);
  }

  // 👉 NEXT
  next() {
    if (this.duplicatedEvents.length === 0) return;

    this.activeIndex++;
    this.isTransitioning = true;

    if (this.activeIndex === this.events.length) {
      setTimeout(() => {
        this.isTransitioning = false;
        this.activeIndex = 0;

        setTimeout(() => {
          this.isTransitioning = true;
        }, 50);

      }, 700);
    }
  }

  // 👉 PREV
  prev() {
    if (this.duplicatedEvents.length === 0) return;

    this.isTransitioning = true;

    if (this.activeIndex <= 0) {
      this.activeIndex = this.events.length;
    }

    this.activeIndex--;
  }

  ngOnDestroy() {
    super.ngOnDestroy();

    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
}
