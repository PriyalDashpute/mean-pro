import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeesComponent } from './add-employee/add-employee.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { authGuard, unauthGuard } from './auth.guard';
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: "full"},
    { path: 'employees', component: EmployeesComponent,canActivate :[authGuard] },
    {path:'add-employee',component: AddEmployeesComponent,canActivate :[authGuard]},
     {path:'register',component:RegisterComponent,canActivate :[unauthGuard]},
     {path:'login',component:LoginComponent,canActivate :[unauthGuard]},
     {path:'edit-employee/:id',component:EditEmployeeComponent,canActivate :[authGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }