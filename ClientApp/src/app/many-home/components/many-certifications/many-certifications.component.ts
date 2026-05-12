import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

export interface Client {
  id: string;
  name: string;
  logo: string;
}

@Component({
  selector: 'app-many-certifications',
  templateUrl: './many-certifications.component.html',
  styleUrls: ['./many-certifications.component.scss']
})
export class ManyCertificationsComponent implements OnInit, OnDestroy {
  clients: Client[] = [
    { id: 'c1', name: 'BASIS', logo: 'assets/images/certifications/basis.jpg' },
    { id: 'c2', name: 'e-CAB', logo: 'assets/images/certifications/CAB-logo.png' },
    { id: 'c3', name: 'ISO-27002022', logo: 'assets/images/certifications/ISO-27002022.png' },
    { id: 'c4', name: 'ISO-90012015', logo: 'assets/images/certifications/iso-90012015-1.png' },
    { id: 'c5', name: 'Site', logo: 'assets/images/certifications/site_logo_logo___1633327007.png' },
    //{ id: 'c6', name: 'BTRC', logo: 'assets/images/certifications/btrc.jpeg' },
    //{ id: 'c7', name: 'IRC', logo: 'assets/images/certifications/irc.jpeg' }
  ];

  currentIndex = 0;
  autoPlaySub?: Subscription;

  ngOnInit(): void {
    // Auto-play carousel every 4 seconds
    this.autoPlaySub = interval(4000).subscribe(() => this.nextClient());
  }

  nextClient(): void {
    this.currentIndex = (this.currentIndex + 1) % this.clients.length;
  }

  prevClient(): void {
    this.currentIndex = (this.currentIndex - 1 + this.clients.length) % this.clients.length;
  }

  ngOnDestroy(): void {
    if (this.autoPlaySub) this.autoPlaySub.unsubscribe();
  }
}
