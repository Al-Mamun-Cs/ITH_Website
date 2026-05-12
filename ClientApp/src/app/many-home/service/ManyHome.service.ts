import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface BusinessUnit {
  id: string;
  //name:string;
  title: string;
  img: string;
  description?: string;
  features?: string[];
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  caption?: string;
}

// 1. Add this Interface
export interface Product {
  id: string;
  name: string;
  desc: string;
  features: string[];
  img: string;
}

export interface HeroSlide {
  id: number;
  img: string;
  title: string;
  subtitle: string;
}

export interface Award {
  id: number;
  img: string;
  title: string;
  desc: string;
}
export interface Event {
  id: number;
  img: string;
  title: string;
  desc: string;
}

@Injectable({ providedIn: 'root' })
export class ManyHomeService {
  // --- HERO SLIDER DATA (5 Banners with Correctly Renamed Files per Manifest) ---
  private heroSlides: HeroSlide[] = [
    {
      id: 1,
      img: 'assets/images/slider/banner1.png',
      title: 'MAKING<br>LIVES BETTER',
      subtitle: 'LITTLE BIT EVERYDAY'
    },
    {
      id: 2,
      img: 'assets/images/slider/banner2.png',
      title: 'COOL<br>COMFORT',
      subtitle: 'SUPER STAR FANS'
    },
    {
      id: 3,
      img: 'assets/images/slider/banner3.png',
      title: 'REACHING<br>OUT',
      subtitle: 'TO MILLIONS OF PEOPLE'
    },
    {
      id: 4,
      img: 'assets/images/slider/banner4.png',
      title: 'PURE<br>CONNECTION',
      subtitle: '99.99% PURE COPPER'
    },
    {
      id: 5,
      img: 'assets/images/slider/banner.png',
      title: 'ILLUMINATE<br>YOUR WORLD',
      subtitle: 'SUPER STAR LIGHTING'
    }
  ];

  // --- BUSINESS UNITS (8 Categories with Correctly Renamed Illustrations per Manifest) ---
  private businessUnits: BusinessUnit[] = [
    {
      id: 'b1',
      //name: "5-Port Strip (Top View)",
      title: '5-Port Strip (Top View)',
      description: 'Hand touching digital globe with tech theme.',
      img: 'assets/images/products/prod-5gang-switch-top.jpg',
      features: ['5-port', 'multi-color switch', 'universal socket']
    },
    {
      id: 'b2',
      //name: "5-Port Strip (Side Profile)",
      title: '5-Port Strip (Side Profile)',
      description: 'Hexagonal grid showing meters, switches, and breakers.',
      img: 'assets/images/products/prod-5gang-switch-side.jpg',
      features: ['5-port', 'red breaker', 'side view']
    },
    {
      id: 'b3',
      //name: "5-Port Strip (3/4 Angle)",
      title: '5-Port Strip (3/4 Angle)',
      description: 'Assortment of white LED bulbs and tube lights.',
      img: 'assets/images/products/prod-5gang-switch-angle.jpg',
      features: ['3-port', 'red breaker', 'side view']
    },
    {
      id: 'b4',
      //name: "MTS-201 Compact Socket (Top View)",
      title: 'MTS-201 Compact Socket (Top View)',
      description: 'White ceiling fan on a blue background.',
      img: 'assets/images/products/prod-mts201-top-view.jpg',
      features: ['4-port', 'red breaker', 'side view']
    },
    {
      id: 'b5',
      //name: "MTS-201 Compact Socket (Side Profile)",
      title: 'MTS-201 Compact Socket Side Profile',
      description: 'Filament/Incandescent bulbs on a green background.',
      img: 'assets/images/products/prod-mts201-side-profile.jpg',
      features: ['2-port', 'red breaker', 'side view']
    },
    
  ];

  // Use transparent PNG logos (Clearbit) for cleaner look on dark backgrounds
  private brands: Brand[] = [
    { id: 'br1', name: 'SUPER STAR', logo: 'https://logo.clearbit.com/samsung.com', caption: 'Flagship brand' },
    { id: 'br2', name: 'ORLEE', logo: 'https://logo.clearbit.com/philips.com', caption: 'Innovative appliances' },
    { id: 'br3', name: 'ROOTS', logo: 'https://logo.clearbit.com/bosch.com', caption: 'Durable & trusted' },
    { id: 'br4', name: 'BLINK', logo: 'https://logo.clearbit.com/lg.com', caption: 'Consumer tech' }
  ];

  // --- PRODUCTS (Updated with correct studio photography paths per manifest) ---
  private products: Product[] = [
    {
      id: "prod-5gang-top",
      name: "5-Port Strip (Top View)",
      desc: "Top-down view of 5-socket strip with multi-color switches and universal sockets.",
      features: ["5-port", "multi-color switch", "universal socket"],
      img: "assets/images/products/prod-5gang-switch-top.jpg"
    },
    {
      id: "prod-5gang-side",
      name: "5-Port Strip (Side Profile)",
      desc: "Side profile of long white extension strip showing red breaker button.",
      features: ["5-port", "red breaker", "side view"],
      img: "assets/images/products/prod-5gang-switch-side.jpg"
    },
    {
      id: "prod-5gang-angle",
      name: "5-Port Strip (3/4 Angle)",
      desc: "3/4 perspective view showing coiled cable attachment.",
      features: ["5-port", "coiled cable", "angle view"],
      img: "assets/images/products/prod-5gang-switch-angle.jpg"
    },
    {
      id: "prod-mts201-top",
      name: "MTS-201 Compact Socket (Top View)",
      desc: "Top-down view of compact strip with single orange master button.",
      features: ["4-port", "compact", "master switch"],
      img: "assets/images/products/prod-mts201-top-view.jpg"
    },
    {
      id: "prod-mts201-side",
      name: "MTS-201 Compact Socket (Side Profile)",
      desc: "Low angle view of compact rounded strip with coiled cable.",
      features: ["4-port", "rounded design", "coiled cable"],
      img: "assets/images/products/prod-mts201-side-profile.jpg"
    }
  ];

  // --- AWARDS DATA (6 items per manifest: Marketing Excellence, Brand Excellence, ISO, LEED, BSCIC, Stevie) ---
  private awards: Award[] = [
    {
      id: 1,
      title: 'Marketing Excellence',
      desc: '2016 Global Marketing Excellence for Future is Bright campaign.',
      img: 'assets/images/awards/award-marketing-excellence-2018.jpg'
    },
    {
      id: 2,
      title: 'Brand Excellence',
      desc: 'Award for consumer trust and brand recognition in electrical sector.',
      img: 'assets/images/awards/award-brand-excellence-consumer.jpg'
    },
    {
      id: 3,
      title: 'ISO 9001 & 14001',
      desc: 'International certification for quality and environmental management.',
      img: 'assets/images/awards/award-iso-9001-14001-certified.jpg'
    },
    {
      id: 4,
      title: 'LEED Platinum',
      desc: 'Leadership in Energy and Environmental Design certification.',
      img: 'assets/images/awards/award-leed-platinum-green-building.jpg'
    },
    {
      id: 5,
      title: 'BSCIC Industrial',
      desc: 'Bangladesh Small & Cottage Industries Corporation recognition 2016.',
      img: 'assets/images/awards/award-bscic-industrial-2016.jpg'
    },
    {
      id: 6,
      title: 'Stevie Trophy',
      desc: 'International business awards recognizing company innovation.',
      img: 'assets/images/awards/award-stevie-trophy-international.jpg'
    }
  ];

  // --- EVENTS DATA (6 items per manifest: Marketing Excellence, Brand Excellence, ISO, LEED, BSCIC, Stevie) ---
  private events: Event[] = [
    {
      id: 1,
      title: 'EVENT ONE',
      desc: 'The corporate conference brought industry leaders together to share insights and strategies.',
      img: 'assets/images/events/event1.jpg'
    },
    {
      id: 2,
      title: 'EVENT TWO',
      desc: 'The business seminar focused on emerging trends and professional growth.',
      img: 'assets/images/events/event2.jpg'
    },
    {
      id: 3,
      title: 'EVENT Three',
      desc: 'The product launch event introduced innovative solutions to the market.',
      img: 'assets/images/events/event3.jpg'
    },
    {
      id: 4,
      title: 'EVENT FOUR',
      desc: 'The networking session connected professionals and created new business opportunities.',
      img: 'assets/images/events/event4.jpg'
    },
    {
      id: 5,
      title: 'EVENT FIVE',
      desc: 'The leadership workshop enhanced management skills and team effectiveness.',
      img: 'assets/images/events/event5.png'
    },
    {
      id: 6,
      title: 'EVENT SIX',
      desc: 'The annual business meeting reviewed performance and set goals for future success.',
      img: 'assets/images/events/event6.png'
    }
  ];

  // state as BehaviorSubjects
  private _businessIndex = new BehaviorSubject<number>(0);
  private _brandIndex = new BehaviorSubject<number>(0);

  // expose observables
  businessIndex$ = this._businessIndex.asObservable();
  brandIndex$ = this._brandIndex.asObservable();

  businessUnits$(): Observable<BusinessUnit[]> {
    return new BehaviorSubject<BusinessUnit[]>(this.businessUnits).asObservable();
  }

  brands$(): Observable<Brand[]> {
    return new BehaviorSubject<Brand[]>(this.brands).asObservable();
  }

  // 3. Add Getter
  getProducts(): Observable<Product[]> {
    return new BehaviorSubject<Product[]>(this.products).asObservable();
  }

  getHeroSlides(): Observable<HeroSlide[]> {
    return new BehaviorSubject<HeroSlide[]>(this.heroSlides).asObservable();
  }

  getAwards(): Observable<Award[]> {
    return new BehaviorSubject<Award[]>(this.awards).asObservable();
  }
  getEvents(): Observable<Event[]> {
    return new BehaviorSubject<Event[]>(this.events).asObservable();
  }

  getCurrentBusiness() {
    const i = Math.max(0, Math.min(this._businessIndex.value, this.businessUnits.length - 1));
    return this.businessUnits[i];
  }

  nextBusiness() {
    const next = (this._businessIndex.value + 1) % this.businessUnits.length;
    this._businessIndex.next(next);
  }

  prevBusiness() {
    const prev = (this._businessIndex.value - 1 + this.businessUnits.length) % this.businessUnits.length;
    this._businessIndex.next(prev);
  }

  getCurrentBrand() {
    return this.brands[this._brandIndex.value];
  }

  nextBrand() {
    const next = (this._brandIndex.value + 1) % this.brands.length;
    this._brandIndex.next(next);
  }

  prevBrand() {
    const prev = (this._brandIndex.value - 1 + this.brands.length) % this.brands.length;
    this._brandIndex.next(prev);
  }

  
}
