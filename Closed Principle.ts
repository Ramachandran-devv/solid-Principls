interface BonusCalculator {
    calculateBonus(salary: number): number;
  }
  class ManagerBonus implements BonusCalculator {
    calculateBonus(salary: number): number {
      return salary * 0.3; // 30% bonus
    }
  }
  class DeveloperBonus implements BonusCalculator {
    calculateBonus(salary: number): number {
      return salary * 0.2; // 20% bonus
    }
  }
  class InternBonus implements BonusCalculator {
    calculateBonus(salary: number): number {
      return salary * 0.1; // 10% bonus
    }
  }
  class TesterBonus implements BonusCalculator {
    calculateBonus(salary: number): number {
      return salary * 0.15; // 15% bonus
    }
  }
  class Employee {
    private name: string;
    private salary: number;
    private bonusCalculator: BonusCalculator;
  
    constructor(name: string, salary: number, bonusCalculator: BonusCalculator) {
      this.name = name;
      this.salary = salary;
      this.bonusCalculator = bonusCalculator;
    }
  
    getBonus(): number {
      return this.bonusCalculator.calculateBonus(this.salary);
    }
  
    getDetails(): void {
      console.log(`Employee: ${this.name}`);
      console.log(`Salary: $${this.salary}`);
      console.log(`Bonus: $${this.getBonus()}`);
    }
  }
// Create employees with different roles
const manager = new Employee("Alice", 100000, new ManagerBonus());
const developer = new Employee("Bob", 80000, new DeveloperBonus());
const intern = new Employee("Charlie", 30000, new InternBonus());
const tester = new Employee("David", 50000, new TesterBonus());

// Display employee details
manager.getDetails();


developer.getDetails();

intern.getDetails();

tester.getDetails();
