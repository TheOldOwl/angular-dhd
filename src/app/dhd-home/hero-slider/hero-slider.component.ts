import { Component, OnInit, HostListener } from '@angular/core';

import { DhdRouteService } from '../../routing.service'

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit {

  constructor(private routeSelected: DhdRouteService) { }

  ngOnInit(): void {

  }

  shakeLeft = true;
  currentPage: string;

  @HostListener("window:scroll", []) onWindowScroll() {
    if(window.scrollY > 100){
      this.shakeLeft = false;
    } else {
      this.shakeLeft = true;
    }
  }

  onSelectedRoute(id: number, page: string) {
    this.currentPage = page;
    this.routeSelected.getSelectedRoute({ 'id': id, 'page': page });
  }

}
