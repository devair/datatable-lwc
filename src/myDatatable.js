import { LightningElement, wire, track } from 'lwc';
const COLS = [
    { label: 'Account Name', type: 'text',
     typeAttributes: {
        accountName: { fieldName: 'Name' }
    },
    },
    { label: 'Industry', fieldName: 'Industry', 
    cellAttributes: {
        class: {fieldName: 'industryColor'},
    }
    },
    { label: 'Employees', type: 'number', fieldName: 'NumberOfEmployees',
     typeAttributes: {
        status: {fieldName: 'status'}
    },
    cellAttributes: {
        class: 'slds-theme_alert-texture'
    }
}];

export default class MyDatatable extends LightningElement {
    columns = COLS;

    @track data = [
      {Id : 1, Name : 'Nom1', Industry: 'Industria1', NumberOfEmployees : 1} 
    ]
   
}