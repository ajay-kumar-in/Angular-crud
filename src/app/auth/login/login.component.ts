import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { SubjectsService } from 'src/app/shared/services/subjects.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private subjectService: SubjectsService
  ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  onLogin() {
    if(this.loginForm.invalid) return;
    this.authService.onLoginUser(this.loginForm.value).subscribe(res=> {
      if(res) {
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('token', res.token);
        localStorage.setItem('expirationDuration', res.expirationDuration);
        const expiration: number = +localStorage.getItem('expirationDuration')!;
        this.subjectService.setUserLoginStatus(true);
        this.toastr.success(res.message);
        setTimeout(()=> {
          localStorage.clear();
          this.router.navigate(['/auth/login']);
        },  +expiration * 1000)
        this.router.navigate(['/products/list']);
      }
    })
  }

}
