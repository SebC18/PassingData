import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() childMessage : string;


  constructor() { }

}
