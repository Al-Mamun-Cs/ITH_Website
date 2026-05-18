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

  getHeroSlideStyle(index: number) {
    const total = this.heroSlides.length;
    const current = this.currentHeroIndex;

    // বর্তমান স্লাইড (Active)
    if (index === current) {
      return {
        'transform': 'translateX(0) scale(1) rotateY(0deg)',
        'z-index': '2',
        'opacity': '1',
        'visibility': 'visible'
      };
    }

    // পরবর্তী স্লাইড (ডান দিকে অপেক্ষা করছে)
    // (current + 1) % total লজিকটি নিশ্চিত করে শেষ স্লাইডের পর প্রথম স্লাইডটি ডানেই থাকবে
    if (index === (current + 1) % total) {
      return {
        'transform': 'translateX(100%) scale(0.8) rotateY(-45deg)',
        'z-index': '1',
        'opacity': '0',
        'visibility': 'visible'
      };
    }

    // পূর্ববর্তী স্লাইড (বামে চলে গেছে)
    if (index === (current - 1 + total) % total) {
      return {
        'transform': 'translateX(-100%) scale(0.8) rotateY(45deg)',
        'z-index': '1',
        'opacity': '0',
        'visibility': 'visible'
      };
    }

    // বাকি স্লাইডগুলো পুরোপুরি হাইড থাকবে
    return {
      'transform': 'translateX(100%)',
      'z-index': '0',
      'opacity': '0',
      'visibility': 'hidden'
    };
  }

  shuffleArray(arr: any[]): any[] {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}