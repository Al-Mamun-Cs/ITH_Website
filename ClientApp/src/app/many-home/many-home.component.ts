import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ManyHomeService, HeroSlide } from './service/ManyHome.service';
import { UnsubscribeOnDestroyAdapter } from '../shared/UnsubscribeOnDestroyAdapter';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-many-home',
  templateUrl: './many-home.component.html',
  styleUrls: ['./many-home.component.scss']
})
export class ManyHomeComponent extends UnsubscribeOnDestroyAdapter implements OnInit, OnDestroy {

  heroSlides: HeroSlide[] = [];
  currentHeroIndex = 0;
  heroAutoPlaySub?: Subscription;
  screenWidth: number;
  constructor(private service: ManyHomeService) { super(); this.screenWidth = window.innerWidth; }

  ngOnInit(): void {
    this.subs.sink = this.service.getHeroSlides().subscribe((data: HeroSlide[]) => {
      this.heroSlides = data;
    });

    // 2. Start Auto-Play (7 seconds for hero)
    this.heroAutoPlaySub = interval(7000).subscribe(() => {
      this.nextHeroSlide();
    });
  }
  prevHeroSlide() {
    if (this.heroSlides.length > 0) {
      this.currentHeroIndex = (this.currentHeroIndex - 1 + this.heroSlides.length) % this.heroSlides.length;
    }
  }


  nextHeroSlide() {
    if (this.heroSlides.length > 0) {
      this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroSlides.length;
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.heroAutoPlaySub) this.heroAutoPlaySub.unsubscribe();
  }

}