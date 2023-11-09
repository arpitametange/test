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
  console.log(this.myReactiveForm.value,'contraol');
  this.userService.login(this.myReactiveForm.value).subscribe(() => {
    // Handle login response
    // Save JWT token and handle user session
  });
  if (emailControl && passwordControl && emailControl.valid && passwordControl.valid) {
    const email = emailControl.value;
    const password = passwordControl.value;
    this.userService.login(this.myReactiveForm.value).subscribe(
      (response) => {
        // Handle successful login response
        // Save JWT token and handle user session
        console.log('successfully handle the response',response); // You can log the response for debugging purposes
        this.snackbar.open('You have login successfully','close', {
          duration: 4 * 1000,
        })
        this.router.navigate(['home']);
      },
      (error) => {
        // Handle error from login API
        console.error('what is the errror',error); // Log the error for debugging purposes
        // You can show an error message to the user or perform other error handling tasks.

        this.snackbar.open('User does not exits', 'close', {
          duration: 4 * 1000,
        });
      }
    );
  } else {
    this.myReactiveForm.markAllAsTouched();
    this.snackbar.open('please enter the correct email or password', 'close', {
      duration: 4 * 1000,
    });
  }
}

  
  
}
