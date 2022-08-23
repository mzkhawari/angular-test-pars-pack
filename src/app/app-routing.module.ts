import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyServiceComponent } from './components/my-service/my-service.component';

const routes: Routes = [
// { path: '', pathMatch: 'full', redirectTo:'my-service'  },
    // { path: 'my-service', pathMatch: 'full', component: MyServiceComponent },

    //{ path: "", redirectTo: "/home", pathMatch: "full" },
    {
        path: "",
        component: AppComponent,
        children: [
        { path: "my-service", component: MyServiceComponent },
        { path: "", redirectTo: "my-service", pathMatch: "full" }
    ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
