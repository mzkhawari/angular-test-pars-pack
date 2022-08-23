import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-title-search',
  templateUrl: './page-title-search.component.html',
  styleUrls: ['./page-title-search.component.css']
})
export class PageTitleSearchComponent implements OnInit {

  @Input()
  title:string ="";

  @Output()
  OnSearch: EventEmitter<any> =  new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  searchText:string="";
  onSearch($event:any){
    let value = $event.target.value;
    this.OnSearch.next(value);
  }

}
