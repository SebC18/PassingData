import { Operations } from '../models/Operations.model';
import { ListeOperations, ListeOperationsSorted } from './../models/ListeOperations.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste-child',
  templateUrl: './liste-child.component.html',
  styleUrls: ['./liste-child.component.scss']
})
export class ListeChildComponent {
  operations : Array<ListeOperationsSorted> = [] ;
  @Input() listeOperations: ListeOperations | undefined;
  @Output() changeEvent = new EventEmitter<Operations>();
  constructor() { }


}
