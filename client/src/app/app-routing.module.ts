import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeesComponent } from './add-employee/add-employee.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
export const routes: Routes = [

    { path: '', redirectTo: 'employees', pathMatch: "full"},
    { path: 'employees', component: EmployeesComponent },
    {path:'add-employee',component: AddEmployeesComponent},
     {path:'register',component:RegisterComponent},
     {path:'login',component:LoginComponent},
     {path:'edit-employee/:id',component:EditEmployeeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }