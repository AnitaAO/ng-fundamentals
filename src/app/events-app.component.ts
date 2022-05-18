import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-Bar></nav-Bar>
  <events-list></events-list>',
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}