import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin(event: Event): void {
    event.preventDefault();
    // Add login logic later
    console.log('Login submitted');
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
