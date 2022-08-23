import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentAntModule } from './common-module/common-component-ant.module';
import { MyServiceMenuComponent } from './components/my-service-menu/my-service-menu.component';
import { MyServiceComponent } from './components/my-service/my-service.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceTableComponent } from './components/my-service-table/my-service-table.component';


@NgModule({
  declarations: [
    AppComponent,
    MyServiceComponent,
    MyServiceMenuComponent,
    MyServiceTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NzIconModule,
    NzTableModule,
    CommonComponentAntModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
