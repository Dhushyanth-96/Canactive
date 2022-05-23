import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Raj', status:'Fewer'},
  {position: 2, name: 'Sita', status:'Cold'},
  {position: 3, name: 'Jack', status:'Fewer'},
  {position: 4, name: 'Bery', status:'Cold '},
  {position: 5, name: 'Gopi', status: 'Cold'},
  {position: 6, name: 'Ram', status: 'Fewer'},
  {position: 7, name: 'Ninja', status:'Fewer'},
  {position: 8, name: 'Red', status: 'Fewer'},
  {position: 9, name: 'Aman', status: 'Cold'},
  {position: 10, name: 'Neon', status: 'Fewer'},
];

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'status'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }
 

}
