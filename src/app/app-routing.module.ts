import { Parent3Component } from './ViewChild/parent3/parent3.component';
import { ParentViewComponent } from './onChangesInput/parent-view/parent-view.component';
import { AppComponent } from './app.component';
import { ParentComponent } from './input/parent/parent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Parent2Component } from './outputPlusEventEmit/parent2/parent2.component';
import { Parent4Component } from './sharedService/parent4/parent4.component';


const routes: Routes = [
  {
    path : '',
    component : ParentViewComponent
  },
  {
    path : 'input',
    component : ParentComponent
  },
  {
    path : 'onChangesInput',
    component : ParentViewComponent
  },
  {
    path : 'outputEventEmit',
    component : Parent2Component
  },
  {
    path : 'sharedService',
    component : Parent4Component
  },
  {
    path : 'ViewChild',
    component : Parent3Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
