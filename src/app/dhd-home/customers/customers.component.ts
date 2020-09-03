import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  currentSlide = 0;
  stopSlide: boolean;

  constructor() { }

  ngOnInit(): void {
    const carousel = interval(5000);
    carousel.subscribe(
      x => {
        if (!this.stopSlide) {
          const next = this.currentSlide + 1;
          this.currentSlide = next === this.seeImg.length ? 0 : next;
        }
      }
    );
  }

  seeImg = [
    { src: "assets/Autoliv_logo.png", srcHvr: "assets/Autoliv_logo_b&w.png" },
    { src: "assets/Veo-logo.png", srcHvr: "assets/Veo-logo-b&w.png" }
  ];

}
