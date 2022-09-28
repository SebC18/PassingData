import { ListeChildComponent } from './outputPlusEventEmit/liste-child/liste-child.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './input/parent/parent.component';
import { ChildComponent } from './input/child/child.component';
import { Parent2Component } from './outputPlusEventEmit/parent2/parent2.component';
import { Child2Component } from './outputPlusEventEmit/child2/child2.component';
import { Child3Component } from './ViewChild/child3/child3.component';
import { Parent3Component } from './ViewChild/parent3/parent3.component';
import { Parent4Component } from './sharedService/parent4/parent4.component';
import { Child4Component } from './sharedService/child4/child4.component';
import { SiblingComponent } from './sharedService/sibling/sibling.component';
import { ChildWithInputComponent } from './onChangesInput/child-with-input/child-with-input.component';
import { ParentViewComponent } from './onChangesInput/parent-view/parent-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    Child3Component,
    Parent3Component,
    Parent4Component,
    Child4Component,
    SiblingComponent,
    ListeChildComponent,
    ChildWithInputComponent,
    ParentViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
