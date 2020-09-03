import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicenow',
  templateUrl: './servicenow.component.html',
  styleUrls: ['./servicenow.component.scss']
})
export class ServicenowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  snServices = [
    {
      title: 'IT Service Management',
      color: '#143d66',
      image: 'assets/ITSMv8.png',
      imageHvr: 'assets/ITSMv4.png',
      text: 'Deliver services that increase productivity and achieve new insights by consolidating to the most innovative ITSM solution.',
      link: '#'
    },
    {
      title: 'IT OPERATIONS MANAGEMENT',
      color: '#E8804C',
      image: 'assets/ITOMv3.png',
      imageHvr: 'assets/ITOMv3.png',
      text: 'Gain visibility into your operations footprint, manage service health, and optimize service delivery and spend.',
      link: '#'
    },
    {
      title: 'IT BUSINESS MANAGEMENT',
      color: '#6cb23f',
      image: 'assets/ITBM.png',
      imageHvr: 'assets/ITBM.png',
      text: 'IT Business Management allows you to work where it matters most, redirect spend to critical apps, and accelerate time to value.',
      link: '#'
    }
  ]

}
