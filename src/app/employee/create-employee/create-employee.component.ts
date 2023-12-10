import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/model/employee';
import { EmployeeParams } from 'src/app/model/employeeParams';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  emailId = new FormControl('', [Validators.required]);
  mobile = new FormControl('',[Validators.required])

  constructor(
    private employeeService : EmployeeService
    ) { }

  ngOnInit(): void {
    // this.createEmployee();
  }

  employeeParams = {} as EmployeeParams;

  createEmployee(): void{
    this.employeeService.createEmployee(this.employeeParams).subscribe(
      (response) => {
        // this.employee = response.data;
        console.log(response.data)
      }
    )
  }
}
