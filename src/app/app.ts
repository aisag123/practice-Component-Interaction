import { Component, signal } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [Child],
  template: `
    <div class="container parent">
      <h2>Parent Component (App Component)</h2>
      <p>Message from Child: </p>
      <div>
        <app-child></app-child>
      </div>
    </div>
  `,
  styles: `.parent{background-color: pink; color: black}`
})
export class App {

}


  

