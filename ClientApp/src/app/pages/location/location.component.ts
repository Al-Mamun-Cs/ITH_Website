import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit, AfterViewInit {

  private map!: L.Map;

  // আপনার ব্রাঞ্চগুলোর ডাটা (এখানে আপনার আসল লোকেশনগুলো বসিয়ে দিন)
  branches = [
    {
      name: 'Corporate Head Office',
      lat: 23.8103, 
      lng: 90.4125,
      address: 'Gulshan, Dhaka, Bangladesh',
      googleMapUrl: 'https://www.google.com/maps?q=23.8103,90.4125'
    },
    {
      name: 'Chittagong Branch',
      lat: 22.3569,
      lng: 91.7832,
      address: 'Agrabad, Chattogram',
      googleMapUrl: 'https://www.google.com/maps?q=22.3569,91.7832'
    },
    {
      name: 'Sylhet Regional Office',
      lat: 24.8949,
      lng: 91.8687,
      address: 'Zindabazar, Sylhet',
      googleMapUrl: 'https://www.google.com/maps?q=24.8949,91.8687'
    },
    {
      name: 'China Office',
      lat: 39.9042,
      lng: 116.4074,
      address: 'Beijing, China',
      googleMapUrl: 'https://www.google.com/maps?q=39.9042,116.4074'
    }

  ];

  constructor() { }

  ngOnInit(): void {
    // ডিফল্ট আইকন ফিক্স (যাতে ম্যাপের পিন দেখা যায়)
    const iconDefault = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = iconDefault;
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {

  // 1️⃣ Map create
  this.map = L.map('map', {
    center: [23.6850, 90.3563],
    zoom: 5
  });

  // 2️⃣ 🔥 CartoDB tile layer (ENGLISH country & city names)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap © CARTO'
  }).addTo(this.map);

  // 3️⃣ Fit bounds for all branches
  const bounds = L.latLngBounds([]);

  // 4️⃣ Add markers
  this.branches.forEach(branch => {
    const marker = L.marker([branch.lat, branch.lng]);

    const popupContent = `
      <div style="font-family: Arial, sans-serif; padding: 5px;">
        <h6 style="margin: 0 0 5px; color: #9E2A8B;">${branch.name}</h6>
        <p style="margin: 0 0 10px; font-size: 12px;">${branch.address}</p>
        <a href="${branch.googleMapUrl}" target="_blank"
           style="background: #9E2A8B; color: white; padding: 4px 8px;
           text-decoration: none; border-radius: 4px; font-size: 11px;">
           Get Directions
        </a>
      </div>
    `;

    marker.bindPopup(popupContent);
    marker.addTo(this.map);

    // extend bounds
    bounds.extend([branch.lat, branch.lng]);
  });

  // 5️⃣ Auto zoom to show all locations (Bangladesh + China)
  this.map.fitBounds(bounds, {
    padding: [50, 50]
  });
}


}