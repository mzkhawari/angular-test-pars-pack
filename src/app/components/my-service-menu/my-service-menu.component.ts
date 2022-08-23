import { Component, Input, OnInit } from '@angular/core';
import { ServiceMenuModel } from '../models/service-menu-model.model';

@Component({
  selector: 'app-my-service-menu',
  templateUrl: './my-service-menu.component.html',
  styleUrls: ['./my-service-menu.component.css']
})
export class MyServiceMenuComponent implements OnInit {

  @Input()
  menuItem:ServiceMenuModel[]=[]

  constructor() { }

  ngOnInit() {
  }


  getIconType(type:string){

    let  imgSrc:string="";
    switch(type){
      case 'cdn' : 
        imgSrc = 'cdn.svg'; 
        break;        
      case 'domain' : 
        imgSrc = 'domain.svg'; 
        break;        
      case 'hosting' : 
        imgSrc = 'hosting.svg'; 
        break;          
      case 'server' : 
        imgSrc = 'server.svg'; 
        break;          
      case 'ssl' : 
        imgSrc = 'ssl.svg'; 
        break;       
      case 'other-service' : 
        imgSrc = 'other-service.svg'; 
        break;          
      default:
        imgSrc = 'all-service.svg'; 
    }
  }


}
