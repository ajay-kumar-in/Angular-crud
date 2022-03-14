import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      address: new FormControl('', [Validators.required])
    })
    
  }

  onSignup() {
    if(this.signupForm.invalid) return;
    this.authService.onCreateUser(this.signupForm.value).subscribe(res=> {
      if(res) {
        console.log('resssssssssssssss', res);
      }
    })
  }

}
