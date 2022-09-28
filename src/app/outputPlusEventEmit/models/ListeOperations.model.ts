import { Operations } from '../models/Operations.model';

export interface ListeOperations{
    operations: Array<Operations>;
}

export interface ListeOperationsSorted {
    date: Date;
    operations: Array<Operations>;
}