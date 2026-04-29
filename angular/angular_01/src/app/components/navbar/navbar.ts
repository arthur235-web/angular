import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Output() tabChange = new EventEmitter<string>();

  selectTab(tab: string) {
    this.tabChange.emit(tab);
  }
}
