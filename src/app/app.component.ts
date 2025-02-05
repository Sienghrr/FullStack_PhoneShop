import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'FE';
  isLoggedIn = false;
  switchView(isSignin: boolean) {
    this.isLoggedIn = isSignin;
  }
  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

}
