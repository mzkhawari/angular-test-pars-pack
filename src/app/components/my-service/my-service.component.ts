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


  winHeight:any;
  ngOnInit() {
    this.getServices();
    this.winHeight = window.innerHeight
  }


  dataSourceFilterd:ServiceModelDto[]=[]
  
  filterByType($event:string){
    let value = $event.toLowerCase();
    if(value =='all-service')
      this.dataSourceFilterd  =this.dataSource;
    else
      this.dataSourceFilterd = this.dataSource.filter(f=>f.type.toLowerCase()==value);    
  } // for Filtering tab & menu
  

  menuData:ServiceMenuModel[]=[]
  dataSource :ServiceModelDto[] =[];
  value :any ;
  getServices(){
    debugger;
    this.baseCrud.get().subscribe(res=>{
      const result = res as ResultModel;
      if(result.success){
        this.dataSourceFilterd = this.dataSource = result.data as ServiceModelDto[];

        //alert(result.message);
        debugger;
        this.value = _.groupBy(this.dataSource,f=>f.type);
        let menu :ServiceMenuModel[] = _.map(this.value, function(value, prop) {
          debugger;
          let count = value.length;
          let titleValue =prop;
          if(prop=="Other")
            titleValue ='سایر محصولات';
          return  { title: titleValue, count: count, type:prop };
        });
        this.menuData.push({title:'همه سرویس ها', count : this.dataSource.length, type:'all-service'})
        this.menuData.push(...menu);
      }else{
        alert(result.message + result.errors.join(','));
      }
    });
  
    
  }

  
  onSearchItem($event:any){



  }



}
