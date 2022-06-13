import { Component, OnInit } from '@angular/core';
import {faFacebookF, faTwitter, faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons' ;
import {faAngleDown} from '@fortawesome/free-solid-svg-icons' ;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin =faLinkedin;
  faAngleDown = faAngleDown;
  links:Array<string> = ['HOME','HOTELS','FLIGHTS','CRUISE','CARS','BLOG','PAGES'];
  constructor() { }

  ngOnInit(): void {
  }

}
