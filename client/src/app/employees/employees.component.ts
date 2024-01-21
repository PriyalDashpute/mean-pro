import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {

  employees: any = [];

  newEmployee = {
    firstName: '',
    lastName: '',
  }

  constructor(private http: HttpClient,
    private router: Router) {
  }

  getEmployees() {
    this.http.get('http://localhost:3000/employee').subscribe({
      next: (res: any) => {
        console.log(res);
        this.employees = res.Employees;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  createEmployee() {
    this.http.post('http://localhost:3000/employee', this.newEmployee).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newEmployee.firstName = '';
        this.newEmployee.lastName = '';
        this.getEmployees();
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  deleteEmployee(id: any) {
    this.http.delete('http://localhost:3000/employee/' + id).subscribe({
      next: (res: any) => {
        this.getEmployees();
      },
      error: (err: any) => {
      },
    });
  }
  goToAddEmployees() {
    this.router.navigate(['/add-employee']);
  }
}

