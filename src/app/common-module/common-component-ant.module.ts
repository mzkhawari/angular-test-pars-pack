import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  ],  
  exports:[
  ],
  entryComponents: [
  ],

})
export class CommonComponentAntModule {
  static forRoot(){
    return{
      NgModule : CommonComponentAntModule,
    }
  }
 }
