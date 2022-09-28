import { Operations } from '../models/Operations.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {
  message : string = "New message from the child :Holà mundo";

  @Output() messageEvent = new EventEmitter<string>();
  @Output() changeEvent = new EventEmitter<Operations>();
  
  @Input() operation: Operations = {
    date: '27/03/2021',
    reference: '0',
    libelle: 'Oparation zero',
    montant: 10,
  }

  @Input() operation1: Operations = {
    date: '08/09/2021',
    reference: '1',
    libelle: 'Oparation number one',
    montant: 12,
  }
  @Input() operation2: Operations = {
    date: '30/12/2021',
    reference: '2',
    libelle: 'Oparation number two',
    montant: 14,
  }
  @Input() operation3: Operations = {
    date: '15/06/2021',
    reference: '3',
    libelle: 'Oparation number three',
    montant: 16,
  }

  constructor() {
   }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

  operationClicked(){
    console.log('0');
    this.changeEvent.emit(this.operation);
  }

  operationClicked1(){
    console.log('1');
    this.changeEvent.emit(this.operation1);
  }

  operationClicked2(){
    console.log('2');
    this.changeEvent.emit(this.operation2);
  }
  operationClicked3(){
    console.log('3');
    this.changeEvent.emit(this.operation3);
  }

}
