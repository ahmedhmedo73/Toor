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
  links:any = [
    {name : "HOME" , list : ['Home v1','Home v2']},
    {name : "HOTELS" , list : ['Hotels Grid','Hotels Details']},
    {name : "FLIGHTS" , list : ['Flights Grid','Flights Details']},
    {name : "CRUISE" , list : ['Cruise Grid','Cruise Details']},
    {name : "CARS" , list : ['Cars Grid','Cars Details']},
    {name : "BLOG" , list : ['Blog Grid','Blog Details']},
    {name : "PAGES" , list : ['About Us' ,'Contact Us' , "FAQ's" , 'Booking' , 'Gallery' , 'Error 404' ,'Coming Soon']},
  ]
  activeList:string ="";
  constructor() { }

  ngOnInit(): void {
  }

  showList(name:any){
    this.activeList = name;
  }
  hideList(){
    this.activeList = "";
  }
}
