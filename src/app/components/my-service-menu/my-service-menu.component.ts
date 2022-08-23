import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';
import { ServiceMenuModel } from '../models/service-menu-model.model';

@Component({
  selector: 'app-my-service-menu',
  templateUrl: './my-service-menu.component.html',
  styleUrls: ['./my-service-menu.component.css']
})
export class MyServiceMenuComponent implements OnInit {

  @Input()
  menuItem:ServiceMenuModel[]=[]

  @Output()
  OnSelectType: EventEmitter<any> =  new EventEmitter();

  winWidth:any;  
  winHeight:any;
  constructor() { 


  }

  selectedType:string="all-service";
  ngOnInit() {
    debugger;
    this.winWidth = window.innerWidth;  
    this.winHeight = window.innerHeight
  }

  selectedtab(arg:any[]){
    if(arg.length>0){
      if(arg[0]=='select'){
        this.OnSelectType.next(arg[1]); 
      }
    }
  }

  selectedMenu($event : string){
    this.selectedType = $event;
    this.OnSelectType.next(this.selectedType);
  }


  nzTabPosition: NzTabPosition = 'top';

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
