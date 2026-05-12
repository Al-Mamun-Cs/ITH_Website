import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.scss']
})
export class BusinessProfileComponent implements OnInit {
  
  unitType: string = '';
  currentData: any;

  // Data Dictionary
  businessData: any = {
    'accessories': {
      title: 'Electrical Accessories',
      desc: 'The market leader in switches and sockets in Bangladesh.',
      img: 'assets/images/cat-electrical-systems.png'
    },
    'cables': {
      title: 'Super Star Cables',
      desc: '99.99% Pure Copper cables ensuring safety for your home.',
      img: 'assets/images/hero-cable-innovation.jpg'
    },
    'fan': {
      title: 'Super Star Fan',
      desc: 'Premium ceiling and exhaust fans for ultimate comfort.',
      img: 'assets/images/cat-home-appliances.png'
    },
    'lighting': {
      title: 'Lighting Solutions',
      desc: 'Energy efficient LED lighting for modern homes.',
      img: 'assets/images/cat-led-lighting.png'
    }
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.unitType = params['type'];
      // Fallback if data doesn't exist
      this.currentData = this.businessData[this.unitType] || {
        title: this.unitType.toUpperCase(),
        desc: 'Innovative solutions from Super Star Group.',
        img: 'assets/images/many_logo.png'
      };
    });
  }
}