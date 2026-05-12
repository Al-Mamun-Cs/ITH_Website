import { Component } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent {
  membership = [
    { icon: '', value: '06',title:'assets/images/certifications/btrc.jpeg' },
    { icon: '', value: '27M',title:'assets/images/certifications/nationalskills.jpeg' },
    { icon: '', value: '64',title:'assets/images/certifications/irc.jpeg' },
    
  ];
}
