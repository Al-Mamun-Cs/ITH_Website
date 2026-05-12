import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManyHomeService, Award } from '../../service/ManyHome.service';
import { UnsubscribeOnDestroyAdapter } from '../../../shared/UnsubscribeOnDestroyAdapter';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-many-awards',
  templateUrl: './many-awards.component.html',
  styleUrls: ['./many-awards.component.scss']
})
export class ManyAwardsComponent extends UnsubscribeOnDestroyAdapter implements OnInit, OnDestroy {

  awards: Award[] = [];
  currentIndex = 0;
  autoPlaySub?: Subscription;

  visibleCount = 1;
  isMobile = false;

  constructor(private service: ManyHomeService) { super(); }

  ngOnInit(): void {
    this.setViewMode();
    this.subs.sink = this.service.getAwards().subscribe(data => this.awards = data);

    // Auto-Play every 5s
    this.autoPlaySub = interval(5000).subscribe(() => this.next());
    window.addEventListener('resize', this.setViewMode.bind(this));
  }
  setViewMode() {
    const width = window.innerWidth;

    if (width <= 767) {
      this.visibleCount = 2;   // 📱 Mobile → 2 images
      this.isMobile = true;
    } else {
      this.visibleCount = 1;   // 💻 Desktop → normal
      this.isMobile = false;
    }
  }

  getVisibleAwards(): Award[] {
    if (!this.awards || this.awards.length === 0) return [];

    const result: Award[] = [];

    for (let i = 0; i < this.visibleCount; i++) {
      result.push(this.awards[(this.currentIndex + i) % this.awards.length]);
    }

    return result;
  }



  next() {
    this.currentIndex = (this.currentIndex + 1) % this.awards.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.awards.length) % this.awards.length;
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.autoPlaySub) this.autoPlaySub.unsubscribe();
  }
}
