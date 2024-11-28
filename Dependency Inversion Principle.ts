interface NotificationService {
    sendNotification(to: string, message: string): void;
  }
  class EmailService implements NotificationService {
    sendNotification(to: string, message: string): void {
      console.log(`Sending Email to ${to}: ${message}`);
    }
  }
  class SMSService implements NotificationService {
    sendNotification(to: string, message: string): void {
      console.log(`Sending SMS to ${to}: ${message}`);
    }
  }
  class NotificationManager {
    private service: NotificationService;
  
    constructor(service: NotificationService) {
      this.service = service;
    }
  
    send(to: string, message: string): void {
      this.service.sendNotification(to, message);
    }
  }
// Create instances of low-level services
const emailService = new EmailService();
const smsService = new SMSService();

// Use NotificationManager with EmailService
const emailNotifier = new NotificationManager(emailService);
emailNotifier.send("user@example.com", "Hello via Email!");
// Output: Sending Email to user@example.com: Hello via Email!

// Use NotificationManager with SMSService
const smsNotifier = new NotificationManager(smsService);
smsNotifier.send("+1234567890", "Hello via SMS!");
// Output: Sending SMS to +1234567890: Hello via SMS!

          