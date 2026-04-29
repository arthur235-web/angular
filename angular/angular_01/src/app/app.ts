import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users/users';
import { Documents } from './components/documents/documents';
import { provideHttpClient } from '@angular/common/http';
import { PostByUserComponent } from './components/post-by-user/post-by-user';
import { ApiService } from './services/api';

export const appConfig = {
  providers: [provideHttpClient()]
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, UsersListComponent, PostByUserComponent, Documents, ApiService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_navbar');
  selectedTab: string = 'users';

  onTabChange(tab: string) {
    this.selectedTab = tab;
  }
}
