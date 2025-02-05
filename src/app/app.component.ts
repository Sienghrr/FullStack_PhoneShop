import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FE';
  isLoggedIn = true;
  switchView(isSignin: boolean) {
    this.isLoggedIn = isSignin;
  }

}
