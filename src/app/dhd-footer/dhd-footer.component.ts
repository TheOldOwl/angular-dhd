import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-dhd-footer',
  templateUrl: './dhd-footer.component.html',
  styleUrls: ['./dhd-footer.component.scss']
})
export class DhdFooterComponent implements OnInit {

  faFacebook = faFacebookSquare;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
