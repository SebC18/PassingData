import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-with-input',
  templateUrl: './child-with-input.component.html',
  styleUrls: ['./child-with-input.component.scss']
})
export class ChildWithInputComponent implements OnInit {
@Output() onKeyUp:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitInputData($event) {
    this.onKeyUp.emit($event.target.value);
  }

}
