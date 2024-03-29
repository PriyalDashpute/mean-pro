import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeesComponent {
  newEmployee = {
    firstName: '',
    lastName: '',
    email: '',
    mNumber: '',
    gender: '',
    city: '',
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  createEmployee() {
    this.http.post('http://localhost:3000/Employee', this.newEmployee).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newEmployee.firstName = '';
        this.newEmployee.lastName = '';
        this.newEmployee.email = '';
        this.newEmployee.mNumber = '';
        this.newEmployee.gender = '';
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  goToViewEmployees() {
    this.router.navigate(['/employees']);
  }

}