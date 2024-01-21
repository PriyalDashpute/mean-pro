import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {EmployeesComponent } from "./employees/employees.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";

import { AddEmployeesComponent } from "./add-employee/add-employee.component";
@NgModule({
    declarations: [
        AppComponent,
        EmployeesComponent,
        AddEmployeesComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, 
        FormsModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}