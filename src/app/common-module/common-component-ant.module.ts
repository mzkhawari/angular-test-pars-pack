import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageTitleSearchComponent } from './page-title-search/page-title-search.component';

const MODULES = [
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //...MODULES,    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],  
  declarations: [
    PageTitleSearchComponent,
  ],  
  exports:[
    PageTitleSearchComponent,
  ],
  entryComponents: [
    PageTitleSearchComponent,
  ],

})
export class CommonComponentAntModule {
  static forRoot(){
    return{
      NgModule : CommonComponentAntModule,
    }
  }
 }
