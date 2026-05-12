import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  windowWidth = window.innerWidth;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  }
  goToTechnomole() {
    window.open('https://hnsautomobiles.com/', '_blank');
  }

}
