import { Component, Input, OnInit } from '@angular/core';

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
  }

}
