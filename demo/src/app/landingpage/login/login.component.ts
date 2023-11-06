import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


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

  constructor(private fb: FormBuilder,private userService:UserService,private router:Router) {
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
      this.router.navigate(['home'])
    } else {
      
      this.myReactiveForm.markAllAsTouched();
    }
  }


  
  
}
