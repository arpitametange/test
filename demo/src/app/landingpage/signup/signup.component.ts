import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  hide = true;
  mySignUpForm:FormGroup
constructor(private fb:FormBuilder,private userService:UserService){
  this.mySignUpForm=this.fb.group({
    'name':new FormControl('',Validators.required),
    'Lname':new FormControl('',Validators.required),
    'email':new FormControl('',[Validators.email,Validators.required]),
    'password':new FormControl('',[Validators.required])
  })
}

OnSubmit(){
  const emailControl = this.mySignUpForm.get('email');
  const passwordControl = this.mySignUpForm.get('password');
  const name=this.mySignUpForm.get('name')
console.log(this.mySignUpForm.value,'signup data');
this.mySignUpForm.reset()


this.userService.signup(this.mySignUpForm.value).subscribe(response => {
  // Handle signup response
});
}
}
