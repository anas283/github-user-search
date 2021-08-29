import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	darkMode = false;
	mode = 'DARK';

	toggleMode() {
		this.darkMode = !this.darkMode;

		if(this.darkMode) {
			this.mode = 'LIGHT';
		}
		else {
			this.mode = 'DARK';
		}
	}
}
