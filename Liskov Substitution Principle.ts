// Base interface for Payment
interface Payment {
  processPayment(amount: number): void;
}

// Interface for card payments
interface CardPayment extends Payment {
  validateCardDetails(cardNumber: string): void;
}

// Interface for UPI payments
interface UpiPayment extends Payment {
  validateUpiId(upiId: string): void;
}

// Implementation for card payment
class CreditCardPayment implements CardPayment {
  validateCardDetails(cardNumber: string): void {
    console.log(`Validating card number: ${cardNumber}`);
  }

  processPayment(amount: number): void {
    console.log(`Processing card payment of ₹${amount}`);
  }
}

// Implementation for UPI payment
class UpiPaymentSystem implements UpiPayment {
  validateUpiId(upiId: string): void {
    console.log(`Validating UPI ID: ${upiId}`);
  }

  processPayment(amount: number): void {
    console.log(`Processing UPI payment of ₹${amount}`);
  }
}

// Common functions to handle payments
function handleCardPayment(cardPayment: CardPayment, cardNumber: string, amount: number): void {
  cardPayment.validateCardDetails(cardNumber);
  cardPayment.processPayment(amount);
}

function handleUpiPayment(upiPayment: UpiPayment, upiId: string, amount: number): void {
  upiPayment.validateUpiId(upiId);
  upiPayment.processPayment(amount);
}

// Usage examples
const cardPayment = new CreditCardPayment();
handleCardPayment(cardPayment, "1234-5678-9012-3456", 500); 
// Output:
// Validating card number: 1234-5678-9012-3456
// Processing card payment of ₹500

const upiPayment = new UpiPaymentSystem();
handleUpiPayment(upiPayment, "user@upi", 250); 
// Output:
// Validating UPI ID: user@upi
// Processing UPI payment of ₹250
