import { Component, OnInit } from '@angular/core';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { BaseCrudService } from 'src/app/common-service/crud/base-crud.service';
import { ResultModel } from 'src/app/common-service/models/result-model.model';
import { ServiceModelDto } from 'src/app/common-service/models/service-model-dto.model';
import * as _ from 'lodash'
import { ServiceMenuModel } from '../models/service-menu-model.model';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css']
})
export class MyServiceComponent implements OnInit {

  constructor( private baseCrud: BaseCrudService) { }

  ngOnInit() {
    this.getServices();

  }
  menuData:ServiceMenuModel[]=[]
  dataSource :ServiceModelDto[] =[];
  value :any ;
  getServices(){
    debugger;
    this.baseCrud.get().subscribe(res=>{
      const result = res as ResultModel;
      if(result.success){
        this.dataSource = result.data as ServiceModelDto[];
        //alert(result.message);
        debugger;
        this.value = _.groupBy(this.dataSource,f=>f.type);
      }else{
        alert(result.message + result.errors.join(','));
      }
    });
  
    
  }

  
  onSearchItem($event:any){



  }



}
