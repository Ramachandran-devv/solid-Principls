
// Start with a base interface Bird, defining only common behavior.


// base interface
interface Bird {
  eat(): void;
}

// Step 2: Create Derived Classes
// For flying birds, define a specific interface FlyingBird that extends Bird.
// Implement both FlyingBird and Bird appropriately.

// Derived interface
// Flying birds
interface FlyingBird extends Bird {
  fly(): void;
}

class Sparrow implements FlyingBird {
  eat(): void {
    console.log("Sparrow is eating seeds.");
  }
  fly(): void {
    console.log("Sparrow is flying high!");
  }
}

// Non-flying birds
class Penguin implements Bird {
  eat(): void {
    console.log("Penguin is eating fish.");
  }
}

// Step 3: Using the LSP
// You can now substitute any Bird object with its subtype (Sparrow or Penguin) without breaking the program. 
// Flying-specific behavior (fly) is isolated to the FlyingBird interface.

function makeBirdEat(bird: Bird): void {
  bird.eat();
}

function makeBirdFly(flyingBird: FlyingBird): void {
  flyingBird.fly();
}

// Substitution examples
const sparrow = new Sparrow();
makeBirdEat(sparrow); // Output: Sparrow is eating seeds.
makeBirdFly(sparrow); // Output: Sparrow is flying high!

const penguin = new Penguin();
makeBirdEat(penguin); // Output: Penguin is eating fish.
// makeBirdFly(penguin); // Error: penguin does not implement fly()



