import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  stats = [
    { icon: 'fas fa-calendar-check', value: '05+',title:'Years' },
    { icon: 'fas fa-handshake', value: '150+',title:'Satisfied Clients' },
    { icon: 'fas fa-tasks', value: '200+',title:'Finished Projects' },
    { icon: 'fas fa-user-tie', value: '50+',title:'Skilled Experts' }
    //{ icon: 'fas fa-globe', value: '50+',title:'Skilled Experts', label: 'Skilled Experts' }
  ];
}
