import { Component } from '@angular/core';
import { LoginProviderService } from './core/login-provider.service';

export class NavigationItem {
  url: string;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  fullscreenActive = false;
  isAuthenticated: boolean;

  constructor(
    public auth: LoginProviderService
  ) {
    this.auth.user.subscribe(res => {
      if (res && res.uid) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }

  dashboardNavigationItems: NavigationItem[] = [
    {
      url: '/dashboard',
      text: 'Dashboard'
    }
  ];

  logout(): void {
    this.auth.signOut();
  }
}
