import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent.component.html',

  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentMessage = "Hello my name is Seb";
  constructor() { }

  ngOnInit(): void {
  }

}
