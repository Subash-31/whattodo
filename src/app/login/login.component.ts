import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { account, ID } from 'src/lib/appwrite'; // Ensure this path is correct

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loggedInUser: any;
  loading: boolean = false;

  constructor(private router: Router, private toastr: ToastrService) { }

  onSubmit() {
    this.login(this.email, this.password);
  }

  async login(email: string, password: string) {
    try {
      this.loading = true;
      await account.createEmailPasswordSession(email, password);
      this.loggedInUser = await account.get();
      this.toastr.success('Login successful', 'Success');
      this.router.navigate(['/Home']);
    } catch (error) {
      this.toastr.error('Login failed. Please check your email and password.', 'Error');
    } finally {
      this.loading = false;
    }
  }
}
