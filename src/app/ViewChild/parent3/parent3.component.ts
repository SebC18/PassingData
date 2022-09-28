import { Child3Component } from './../child3/child3.component';
import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.scss']
})
export class Parent3Component implements AfterViewInit {
  @ViewChild(Child3Component) child;
  message : string = "hello world" ;

  constructor(private cdref: ChangeDetectorRef) { }

  ngAfterViewInit(){
    this.message = this.child.message;
    this.cdref.detectChanges();
  }
  

}
