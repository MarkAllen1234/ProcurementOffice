import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  email = '';
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Dashboard', url: '/folder/dashboard', icon: 'bar-chart' },
    { title: 'Inventory', url: '/folder/inventory', icon: 'list' },
    { title: 'Upload', url: '/folder/upload', icon: 'cloud-upload' },
    { title: 'Help', url: '/folder/help', icon: 'help-circle' },
    { title: 'About', url: '/folder/about', icon: 'information-circle' },
  ];
  constructor(private router: Router) {
    const storedEmail = localStorage.getItem('useremail');
    if (storedEmail !== null) {
      this.email = storedEmail;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
