import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.scss']
})
export class CompanyOverviewComponent implements OnInit {
  isExpanded = {
    vision: false,
    mission: false,
    values: false
  };
  constructor() { }

  ngOnInit(): void {
  }
  toggle(key: 'vision' | 'mission' | 'values') {
    this.isExpanded[key] = !this.isExpanded[key];
  }

}