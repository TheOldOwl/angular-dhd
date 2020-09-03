import { Component, OnInit, HostListener, Renderer2, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import { Router, NavigationStart } from '@angular/router'
import { Location } from '@angular/common';

import { DhdRouteService } from '../routing.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges {

  reduceNav = false;
  subHvr: boolean = false;
  currentPage: string;
  navigationSelect: boolean = false;
  clearfix: string;
  displayPage: string;

  constructor(private renderer: Renderer2, private routeSelected: DhdRouteService, private elem: ElementRef, private loc: Location, private rout: Router) { 
    // rout.events.subscribe((val) => {
    //   console.log(val)
    //   if(val instanceof NavigationStart){
    //     console.log('constructor ' + val.url)
    //     this.currentPage = val.url
    //   }
    // })
  }

  ngOnChanges() {
    
  }

  ngOnInit(): void {
    this.rout.events.subscribe((val) => {
      if(val instanceof NavigationStart){
        this.currentPage = val.url
        this.checkCurrentPage(this.currentPage);
        this.displayPage = this.replaceSpecialChar(this.currentPage)
      }
    })

    // this.routeSelected.currentRoutePage.subscribe(page =>{this.currentPage = page})

    // this.currentPage = this.loc.path();
    // if (this.currentPage){
    //   this.displayPage = this.replaceSpecialChar(this.currentPage)
    // }
    
  }

  ngAfterViewInit() {
    
  }

  

  @HostListener("window:scroll", []) onWindowScroll() {
    
    if (window.scrollY > 100) {
      this.reduceNav = true;
    } else {
      this.reduceNav = false;
    }
    if(window.scrollY > 1 && this.currentPage){
      this.elem.nativeElement.querySelectorAll('.navbar-dark')[0].classList.add('class', "white-scroll")
    } else if(window.scrollY < 1 && this.currentPage) {
      this.elem.nativeElement.querySelectorAll('.navbar-dark')[0].classList.remove('class', "white-scroll")
    }
  }

  toggleClass(evt: any, aClass: string) {
    const hasClass = evt.target.parentNode.classList;
    if (!hasClass) {
      //this.renderer.removeClass(evt.target.parentNode, active);
    } else {
      this.renderer.addClass(evt.target.parentNode, aClass);
    }
  }

  onSelectedRoute(id: number, page: string) {    
    if(id >= 0){
      window.scroll({
        left: 0,
        top: 400,
        behavior: 'smooth'
      });
    } else {
      window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    }
    this.currentPage = page;
    this.checkCurrentPage(this.currentPage);
    this.routeSelected.getSelectedRoute({ 'id': id, 'page': page });
    if (this.currentPage){
      this.displayPage = this.replaceSpecialChar(this.currentPage)
    }
  }

  replaceSpecialChar(string: string){
    return string.replace(/[^\w\s]/gi, ' ');
  }

  checkCurrentPage(page: string){
    if(['/servicenow', '/services', '/blog', '/about-us'].includes(this.currentPage)){
      this.navigationSelect = true;
    } else {
      this.navigationSelect = false;
    }
  }

  menuItems = [
    {
      item: 'Servicenow',
      page: '/servicenow',
      subitems: ['IT Service Management', 'IT Business Management', 'It Operations Management', 'Inteligent Busniess Apps', 'Integration & Automation', 'Service Portal'],
      active: false
    },
    {
      item: 'Services',
      page: '/services',
      subitems: ['Professional Services', 'Managed Services & Support'],
      active: false
    },
    {
      item: 'Blog',
      page: '/blog',
      subitems: [],
      active: false
    },
    {
      item: 'About Us',
      page: 'about-us',
      subitems: ['Company', 'Careers', 'Contact Us'],
      active: false
    }
  ]

}
