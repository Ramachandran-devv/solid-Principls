interface Device {
    powerOn(): void;
    powerOff(): void;
  }
  
  interface TouchScreen {
    touchInput(): void;
  }
  interface KeyboardAndMouse {
    useKeyboard(): void;
    useMouse(): void;
  }
  class AndroidDevice implements Device, TouchScreen {
    powerOn(): void {
      console.log("Android device is powering on.");
    }
  
    powerOff(): void {
      console.log("Android device is powering off.");
    }
  
    touchInput(): void {
      console.log("Android device is receiving touch input.");
    }
  }
  class DesktopDevice implements Device, KeyboardAndMouse {
    powerOn(): void {
      console.log("Desktop device is powering on.");
    }
  
    powerOff(): void {
      console.log("Desktop device is powering off.");
    }
  
    useKeyboard(): void {
      console.log("Desktop device is using a keyboard.");
    }
  
    useMouse(): void {
      console.log("Desktop device is using a mouse.");
    }
  }
// Create instances of Android and Desktop devices
const android = new AndroidDevice();
const desktop = new DesktopDevice();

// Interact with Android device
android.powerOn();
android.touchInput();
android.powerOff();

// Output:
// Android device is powering on.
// Android device is receiving touch input.
// Android device is powering off.

// Interact with Desktop device
desktop.powerOn();
desktop.useKeyboard();
desktop.useMouse();
desktop.powerOff();

// Output:
// Desktop device is powering on.
// Desktop device is using a keyboard.
// Desktop device is using a mouse.
// Desktop device is powering off.
        