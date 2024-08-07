import { Component } from '@angular/core';

@Component({
  selector: 'app-loginnew',
  templateUrl: './loginnew.component.html',
  styleUrls: ['./loginnew.component.css'],
})
export class LoginnewComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Implement login logic here
  }
}
