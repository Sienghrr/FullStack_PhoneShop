import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Output() logoutEvent = new EventEmitter<boolean>();
  ngOnInit(): void {
   
  }
  signOut(){
    localStorage.removeItem('token');
    this.logoutEvent.emit(false);
  }

}
