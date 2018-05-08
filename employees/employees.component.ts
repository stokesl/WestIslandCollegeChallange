import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  //Variables
	employees: Employee[];
	selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  	this.getEmployees();
  }

  //Sets the selected employee when the user selects one from the list
  onSelect(employee: Employee): void{
  	this.selectedEmployee = employee;
  }

  //Retrieves the list of employees
  getEmployees(): void{
  	this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

}
