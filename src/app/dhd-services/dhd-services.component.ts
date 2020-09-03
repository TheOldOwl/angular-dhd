import { Component, OnInit } from '@angular/core';
import { DhdRouteService } from '../routing.service';

@Component({
  selector: 'app-dhd-services',
  templateUrl: './dhd-services.component.html',
  styleUrls: ['./dhd-services.component.scss']
})
export class DhdServicesComponent implements OnInit {

  constructor(private routeSelected: DhdRouteService) { }

  routeId:number;
  page:string

  ngOnInit(): void {
    this.routeSelected.currentRoutePage.subscribe(page =>{this.page = page})
    
    this.routeSelected.currentRouteId.subscribe(id => {
      if(this.page === '/services'){
        this.routeId = id;
      }
    });
  }

}
