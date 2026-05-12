import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const iconRetinaUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png';
    const iconUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
    const shadowUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png';
    L.Marker.prototype.options.icon = L.icon({
      iconRetinaUrl, iconUrl, shadowUrl,
      iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
    });

    this.loadMap();
  }

  private loadMap(): void {
    const locations = [
      {
        name: 'Corporate Office',
        address: 'Mirpur, Dhaka-1216, Bangladesh',
        lat: 23.8223,
        lng: 90.3654
      },
      // {
      //   name: 'Registered Office',
      //   address: '246, Gulshan Link Road, Tejgaon I/A, Dhaka-1208, Bangladesh',
      //   lat: 23.7806,
      //   lng: 90.4035
      // },
      // {
      //   name: 'Regional Support Office',
      //   address: '119, SK Mujib Road, Agrabad, Chattogram, Bangladesh',
      //   lat: 22.3239,
      //   lng: 91.8123
      // },
      // {
      //   name: 'Factory',
      //   address: '444/460 Char kamaldi, Dhondi Bazar, Narayanganj',
      //   lat: 23.5936, lng: 90.7208
      // }
    ];


    const map = L.map('map').setView([23.6800, 90.5000], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    locations.forEach(loc => {
      const marker = L.marker([loc.lat, loc.lng]).addTo(map);
      const popupHtml = `
        <div style="
          background: white; 
          padding: 8px; 
          border-radius: 8px; 
          font-family: Arial, sans-serif; 
          min-width: 200px;
          text-align: left;
        ">
          <div style="color:#0A509F; font-weight:bold; font-size:14px; margin-bottom: 4px;">
            ${loc.name}
          </div>
          <div style="margin-bottom: 10px; font-size:12px; color:#444; line-height: 1.4;">
            ${loc.address}
          </div>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}" 
             target="_blank" 
             style="
                display: block; 
                padding: 8px 0; 
                background: #FAAE1C; 
                color: white; 
                text-decoration: none; 
                border-radius: 5px; 
                font-size: 13px;
                font-weight: bold;
                text-align: center;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
             ">
            Get Directions
          </a>
        </div>
      `;

      marker.bindPopup(popupHtml, {
        maxWidth: 260,
        className: 'custom-popup'
      });

      if (loc.name === 'Head Office') {
        marker.openPopup();
      }
    });

    setTimeout(() => { map.invalidateSize(); }, 500);
  }
}