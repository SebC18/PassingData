import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.scss']
})
export class ParentViewComponent implements OnInit {
  inputFromChild : string;

  constructor() { }

  ngOnInit(): void {
  }

  receiveInput($event) {
    this.inputFromChild = $event;
    console.log('Input from child : ', this.inputFromChild);
  }

}
