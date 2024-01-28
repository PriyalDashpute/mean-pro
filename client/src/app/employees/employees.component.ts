import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {

  employees: any = [];
  isLoading = false;
  newEmployee = {
    firstName: '',
    lastName: '',
  }

  constructor(
    private http: HttpClient,
    private router: Router
    ) {
  }
  ngOnInit(): void {
    this.getEmployees(); 
  }

  getEmployees() {
    this.isLoading = true;
    this.http.get('http://localhost:3000/employee').subscribe({
      next: (res: any) => {
        this.isLoading = false;
        
        this.employees = res.Employees;
      },
      error: (err) => {
        this.isLoading = false;
        
      }
    })
  }

  createEmployee() {
    this.http.post('http://localhost:3000/employee', this.newEmployee).subscribe({
      next: (res: any) => {
        
        
        this.newEmployee.firstName = '';
        this.newEmployee.lastName = '';
        this.getEmployees();
      },
      error: (err) => {
        
        
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
   gotoregister() {
    this.router.navigate(['/register']);
}
gotologin() {
  this.router.navigate(['/login']);
}

}