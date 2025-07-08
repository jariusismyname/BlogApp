import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router: Router) {}

  onRegister(event: Event): void {
    event.preventDefault();
    // Add registration logic here
    console.log('Register submitted');
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
