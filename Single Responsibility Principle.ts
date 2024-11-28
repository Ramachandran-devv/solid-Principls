class Employee {
  private name: string;
  private id: number;
  private position: string;

  constructor(name: string, id: number, position: string) {
    this.name = name;
    this.id = id;
    this.position = position;
  }

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }

  getPosition(): string {
    return this.position;
  }
}

class SalaryCalculator {
  calculateSalary(position: string): number {
    switch (position) {
      case "Manager":
        return 80000;
      case "Developer":
        return 60000;
      case "Intern":
        return 20000;
      default:
        throw new Error("Invalid position");
    }
  }
}

class EmployeeReport {
  private salaryCalculator: SalaryCalculator;

  constructor() {
    this.salaryCalculator = new SalaryCalculator();
  }

  generateReport(employee: Employee): void {
    const name = employee.getName();
    const id = employee.getId();
    const position = employee.getPosition();
    const salary = this.salaryCalculator.calculateSalary(position);

    console.log("Employee Report:");
    console.log(`Name: ${name}`);
    console.log(`ID: ${id}`);
    console.log(`Position: ${position}`);
    console.log(`Salary: $${salary}`);
  }
}

// Create employee instances
const manager = new Employee("Alice", 1, "Manager");
const developer = new Employee("Bob", 2, "Developer");
const intern = new Employee("Charlie", 3, "Intern");

// Generate reports
const reportGenerator = new EmployeeReport();
reportGenerator.generateReport(manager);
reportGenerator.generateReport(developer);
reportGenerator.generateReport(intern);
