import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { account, ID } from 'src/lib/appwrite'; // Ensure this path is correct

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  loggedInUser: any;

  constructor(private router: Router, private toastr: ToastrService) { }

  onSubmit() {
    this.register(this.email, this.password, this.name);
  }

  async register(email: string, password: string, name: string) {
    try {
      await account.create(ID.unique(), email, password, name);
      this.toastr.success('Signup successful. Logging you in...', 'Success');
      await this.login(email, password);
      this.router.navigate(['/Home']);
    } catch (error) {
      this.toastr.error('Signup failed. Please try again.', 'Error');
    }
  }

  async login(email: string, password: string) {
    try {
      await account.createEmailPasswordSession(email, password);
      this.loggedInUser = await account.get();
      this.toastr.success('Login successful', 'Success');
    } catch (error) {
      this.toastr.error('Login failed. Please try again.', 'Error');
    }
  }
}
