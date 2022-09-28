import { Operations } from '../models/Operations.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component {

  constructor() { }
  message = "Parent: Original Message";
  opSelect: Operations = {
    date: '07/09/2021',
    reference: '2',
    libelle: 'Operation Before',
    montant: 12,
  }
  receiveMessage($event){
    this.message = $event;
  }

  operationClicked($event){
    this.opSelect = $event;
    console.log('New op :', this.opSelect);

  }
}
