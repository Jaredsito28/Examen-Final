import { Injectable } from '@angular/core';
import { EmployeeRequest } from '../models/employee-request.model';
import { SalaryResponse } from '../models/salary-response.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculationService {
  private deductionRate: number = 0.10;
  private overtimeRate: number = 1.5;

  calculateSalary(request: EmployeeRequest): SalaryResponse {
    const regularSalary = request.hoursWorked * request.hourlyWage;
    const overtimeSalary = request.overtimeHours * request.hourlyWage * this.overtimeRate;
    const totalSalary = regularSalary + overtimeSalary;
    const deductions = totalSalary * this.deductionRate;
    const netSalary = totalSalary - deductions;

    return {
      regularSalary,
      overtimeSalary,
      deductions,
      netSalary
    };
  }
}
