import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit{

  constructor(
    private employeeService : EmployeeService
    ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  employeeList : Employee[] = [];

  employeeTableDataSource = new MatTableDataSource <Employee>();
  employeeTableDisplayColumns  = ['firstName','lastName','emailId','action'];

  getEmployeeList(){
    this.employeeService.getAllEmployees().subscribe(
      (response) => {
        this.employeeList = response.data;
        console.log(this.employeeList)
        this.employeeTableDataSource = new MatTableDataSource(this.employeeList);
      }
    )
  }
}
