import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})


export class EmployeeDetailComponent implements OnInit {

	//Takes as input the Employee class
	@Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
