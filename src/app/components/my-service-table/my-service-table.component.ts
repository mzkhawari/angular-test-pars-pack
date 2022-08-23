import { Component, Input, OnInit } from '@angular/core';
import * as moment from "jalali-moment";

@Component({
  selector: 'app-my-service-table',
  templateUrl: './my-service-table.component.html',
  styleUrls: ['./my-service-table.component.css']
})
export class MyServiceTableComponent implements OnInit {

  @Input()
  dataItem:any[]=[];
  constructor() { }

  ngOnInit(): void {
    //datesFa = [...datesFa, ]
  }

  changeDateFormat(value:Date){
    return moment(value).format('jYYYY/jM/jD')
  }

}
