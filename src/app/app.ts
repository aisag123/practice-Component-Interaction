import { Component, signal } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [Child],
  template: `
    <div class="container parent">
      <h2>Parent Component (App Component)</h2>
      <!-- message to child: <input type="text" [(ngModel)] = "parentMessage"></input> -->
      <p>Message from Child: {{childMessage()}}</p> 
      <div>
        <app-child
        (clicked) = "receiveMessage($event)"
        />
      </div>
    </div>
  `,
  styles: `.parent{background-color: pink; color: black}`
})
export class App {
  parentMessage = signal<string>('');
  childMessage = signal<string>('');

  receiveMessage(msg: string) {
    this.childMessage.set(msg); //this sets child to msg

  }
}


  

