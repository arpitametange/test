import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  //  console.log(this.email.value,this.password.value,'oninitddd');
   
  }
  hide = true;
  myReactiveForm: FormGroup;

  constructor(private fb: FormBuilder,private userService:UserService,private router:Router,private snackbar:MatSnackBar) {
    this.myReactiveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
     

  

  
  OnSubmit() {
    const emailControl = this.myReactiveForm.get('email');
    const passwordControl = this.myReactiveForm.get('password');
  
    if (emailControl && passwordControl && emailControl.valid && passwordControl.valid) {
      this.userService.login(this.myReactiveForm.value).subscribe(
        (response) => {
          // Handle successful login response
          console.log('Successfully handled the response:', response); // Log the response for debugging purposes
          this.snackbar.open('You have logged in successfully', 'Close', {
            duration: 4000, // 4 seconds
          });
          this.router.navigate(['home']);
        },
        (error) => {
          // Handle error from login API
          console.error('Error occurred during login:', error); // Log the error for debugging purposes
  
          if (error.status === 401) {
            this.snackbar.open('Invalid email or password. Please try again.', 'Close', {
              duration: 4000, // 4 seconds
            });
          } else if (error.status === 404) {
            this.snackbar.open('User not found. Please register or check your credentials.', 'Close', {
              duration: 4000, // 4 seconds
            });
          } else {
            this.snackbar.open('An error occurred. Please try again later.', 'Close', {
              duration: 4000, // 4 seconds
            });
          }
        }
      );
    } else {
      this.myReactiveForm.markAllAsTouched();
      this.snackbar.open('Please enter a valid email and password.', 'Close', {
        duration: 4000, // 4 seconds
      });
    }
  }
  
  
  
}
