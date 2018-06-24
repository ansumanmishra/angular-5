import { Component } from '@angular/core';

@Component({
	selector: 'app-test-app',
	template: `<div>
				{{greet}}

				<input type="text" [(ngModel)]="greet" />
			</div>`
})


export class TestAppComponent {

	public greet = 'Hello World'

  constructor() { }

  ngOnInit() {
  }

  greetMe() {
  	alert('hi');
  }

}