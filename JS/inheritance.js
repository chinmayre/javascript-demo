class Employee {
  constructor(name, emp_code, designation) {
    this.name = name;
    this.emp_code = emp_code;
    this.designation = designation;
    this.salary = 0;
  }

  show() {
    console.log(
      `Employee Details: ${this.name} Emp-Code: ${this.emp_code} 
      Designation: ${this.designation} Salary: ${this.salary}`
    );
  }
}

class PartTimeEmployee extends Employee {
  constructor(name, emp_code, designation, no_of_hrs, hrs_sal) {
    // Call Parent Constructor Through Child Constructor -- super()
    super(name, emp_code, designation);
    this.no_of_hrs = no_of_hrs;
    this.hrs_sal = hrs_sal;
  }

  calculateSalary() {
    this.salary = this.no_of_hrs * this.hrs_sal;
  }
}

class FullTimeEmployee extends Employee {
  constructor(
    name,
    emp_code,
    designation,
    extra_no_hours,
    hrs_sal,
    fixed_salary
  ) {
    // Call Parent Constructor Through Child Constructor -- super()
    super(name, emp_code, designation);
    this.no_of_hrs = extra_no_hours;
    this.hrs_sal = hrs_sal;
    this.fixedSalary = fixed_salary;
  }

  calculateSalary() {
    this.salary = this.fixedSalary + this.no_of_hrs * this.hrs_sal;
  }
}

let partTimeEmp = new PartTimeEmployee(
  "Chinmay",
  28876,
  "Trainee Software Engineer",
  8,
  1500
);
let fullTimeEmp = new FullTimeEmployee(
  "Rele",
  28876,
  "Software Engineer",
  8,
  3000,
  150000
);
partTimeEmp.calculateSalary();
fullTimeEmp.calculateSalary();
const emp = new Employee("Chinmay", 28876, "Software Engineer", 20000);
partTimeEmp.show();
fullTimeEmp.show();
