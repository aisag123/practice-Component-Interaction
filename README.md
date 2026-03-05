# Angular – Parent & Child Communication (Signals-Based)

## 📌 Project Overview

This Angular project demonstrates **modern component communication** using the new Signals-based APIs:

- ✅ `input()` – Pass data from Parent to Child  
- ✅ `output()` – Send data from Child to Parent  
- ✅ `model()` – Enable two-way binding between Parent and Child  

---

## 🎯 Learning Objectives

By completing this project, you will learn how to:

1. Use `input()` to receive reactive data in a child component
2. Use `output()` to emit events to a parent component
3. Use `model()` to implement two-way binding
4. Understand signal-based reactive state management in Angular

---

## 🏗️ Project Structure

```
src/
 └── app/
      ├── app.ts
      ├── app.config.ts
      └── child/
            └── child.ts
```

---

# 🔁 How It Works

---

## 1️⃣ Parent → Child using `input()`

### Parent Component

```ts
import { Component, signal } from '@angular/core';
import { Child } from './child.component';

@Component({
  selector: 'app-root',
  imports: [Child],
  template: `<app-child [message]="parentMessage()" />`
})
export class AppComponent {
  parentMessage = signal("Hello from the Parent Component!");
}
```

### Child Component

```ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  template:`<p>Message from Parent: {{message()}}</p>`
})
export class ChildComponent {
  message = input<string>();
}
```

✔ `input()` creates a read-only signal  
✔ Access its value using `message()`

---

## 2️⃣ Child → Parent using `output()`

### Child Component

```ts
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendMessage()">Send Message to Parent</button>`
})
export class ChildComponent {

  notifyParent = output<string>();

  sendMessage() {
    this.notifyParent.emit("Hello Parent! Message from Child.");
  }
}
```

### Parent Template

```html
<app-child
  [message]="parentMessage()"
  (notifyParent)="receiveMessage($event)"
/>
```

### Parent Component

```ts
childMessage = signal("");

receiveMessage(message: string) {
  this.childMessage.set(message);
}
```

✔ `output()` replaces `@Output()`  
✔ Uses `.emit()` just like EventEmitter  

---

## 3️⃣ Two-Way Binding using `model()`

Angular introduced `model()` to simplify two-way communication.

### Child Component

```ts
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <input [value]="value()" 
           (input)="value.set(($event.target as HTMLInputElement).value)" />
  `
})
export class ChildComponent {
  value = model<string>();
}
```

### Parent Component

```ts
sharedValue = signal("Initial Value");
```

### Parent Template

```html
<app-child [(value)]="sharedValue" />
```

✔ `model()` automatically creates:
- An `input()`
- An `output()`
- Two-way binding support

✔ `[(value)]` works like `ngModel` but signal-based

---

# 🧠 Key Angular 21 Concepts Demonstrated

- Standalone components
- Signals (`signal()`)
- `input()` (signal-based input)
- `output()` (signal-based output)
- `model()` (two-way binding)
- Reactive state updates

---

# ▶️ Running the Project

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
ng serve
```

### 3. Open in Browser

```
http://localhost:4200/
```

---

# 🔄 Expected Behavior

- The child displays a message passed from the parent.
- Clicking the button in the child sends a message back to the parent.
- Editing the input field updates both parent and child instantly using `model()` two-way binding.

---

# 🛠️ Technologies Used

- Angular
- TypeScript
- Signals API
- HTML & CSS

---

# 👨‍🏫 Educational Purpose

This project is designed to demonstrate modern Angular 21 component communication patterns using the Signals API, replacing traditional decorator-based patterns.

---

# 📄 License

This project is for educational purposes.