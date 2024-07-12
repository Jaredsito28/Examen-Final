import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSalaryCalculatorComponent } from './employee-salary-calculator.component';

describe('EmployeeSalaryCalculatorComponent', () => {
  let component: EmployeeSalaryCalculatorComponent;
  let fixture: ComponentFixture<EmployeeSalaryCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSalaryCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeSalaryCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
