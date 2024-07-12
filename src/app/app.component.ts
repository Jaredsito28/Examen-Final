import { Component } from '@angular/core';
import { EmployeeSalaryCalculatorComponent } from './components/employee-salary-calculator/employee-salary-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeSalaryCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', ]
})
export class AppComponent {
  title = 'Calculadora de Salario de Empleados';
}
