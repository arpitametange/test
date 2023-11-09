import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  hide = true;
  mySignUpForm:FormGroup
constructor(private fb:FormBuilder,private userService:UserService,private router:Router,private snackbar:MatSnackBar){
  this.mySignUpForm=this.fb.group({
    'name':new FormControl('',Validators.required),
    'Lname':new FormControl('',Validators.required),
    'email':new FormControl('',[Validators.email,Validators.required]),
    'password':new FormControl('',[Validators.required])
  })
}

OnSubmit() {
  if (this.mySignUpForm.invalid) {
    // Form is invalid, do not proceed with signup
    this.snackbar.open('Please provide valid format for each field', 'Close', {
      duration: 2000,
    });
    return;
  }

  const formData = this.mySignUpForm.value; // Extract form values

  this.userService.signup(formData).subscribe(
    (response) => {
      // Handle successful signup response
      console.log(response, 'data in ts signup');
      this.mySignUpForm.reset();
      this.snackbar.open('Signup Successfully','close',({
duration:2000
      }))
      this.router.navigate(['home']);
    },
    (error) => {
      // Handle error from signup API
      if (error.status === 401) {
        this.snackbar.open('Invalid credentials. Please try again.', 'Close', {
          duration: 2000,
        });
      } else if (error.status === 500) {
        this.snackbar.open('This email has already used. Please try again later.', 'Close', {
          duration: 2000,
        });
      } else {
        this.snackbar.open('An error occurred. Please try again.', 'Close', {
          duration: 2000,
        });
      }
      console.error(error); // Log the error for debugging purposes
    }
  );
}
}
