import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
  { label: 'Web Design Development', icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png', color: '#007bff' },
  { label: 'Customize Software Development', icon: 'https://cdn-icons-png.flaticon.com/512/6062/6062646.png', color: '#0DAC50' }, 
  { label: 'Mobile Apps Development', icon: 'https://cdn-icons-png.flaticon.com/512/2586/2586488.png', color: '#fd7e14' },
  { label: 'Network and Security Solution', icon: 'https://cdn-icons-png.flaticon.com/512/2716/2716654.png', color: '#00d4ff' }, 
  { label: 'Server and Storage', icon: 'https://cdn-icons-png.flaticon.com/512/3067/3067451.png', color: '#a855f7' },
  { label: 'Surveillance and access control', icon: 'https://cdn-icons-png.flaticon.com/512/2562/2562621.png', color: '#f43f5e' },
  { label: 'Data Center Infrastructure', icon: 'https://cdn-icons-png.flaticon.com/512/2906/2906206.png', color: '#10b981' },
  { label: 'Cloud Service Solution', icon: 'https://cdn-icons-png.flaticon.com/512/4149/4149678.png', color: '#3b82f6' },
  // { label: 'Manage Service Solution', icon: 'https://cdn-icons-png.flaticon.com/512/9516/9516712.png', color: '#fbbf24' }
];
}
