import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partners = [
    { icon: '', value: '64',title:'assets/images/parter-certifications/Dell_Logo.png' },
    { icon: '', value: '64',title:'assets/images/parter-certifications/hpe_pri_grn_pos_rgb.png' },
    { icon: '', value: '64',title:'assets/images/parter-certifications/hp.jpg' },
    
    { icon: '', value: '27M',title:'assets/images/parter-certifications/Cisco_logo-1000px.png' },
    { icon: '', value: '64',title:'assets/images/parter-certifications/Fortinet_logo.png' },
    { icon: '', value: '64',title:'assets/images/parter-certifications/Microsoft.jpg' },
    { icon: '', value: '64',title:'assets/images/parter-certifications/m365.jpg' },
    { icon: '', value: '64',title:'assets/images/parter-certifications/zoom.png' },
    { icon: '', value: '64',title:'assets/images/parter-certifications/teem.jpg' },
    
    
    
    { icon: '', value: '06',title:'assets/images/parter-certifications/2560px-Hikvision_logo.png' },
    // { icon: '', value: '64',title:'assets/images/parter-certifications/F5_Networks_logo.png' },
    { icon: '', value: '64',title:'assets/images/parter-certifications/veeam.png' },
    { icon: '', value: '64',title:'assets/images/parter-certifications/vmware by broadcom.png' },
    
    
  ];
}
