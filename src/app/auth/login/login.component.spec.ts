import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        ToastrModule.forRoot()
      ],
      declarations: [LoginComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('Login form should be invalid', fakeAsync(() => {
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  }));

  it('Login form should be valid', fakeAsync(() => {
    component.loginForm.controls['email'].setValue('admin@gmail.com');
    component.loginForm.controls['password'].setValue('admin123');
    expect(component.loginForm.valid).toBeTruthy();
  }));

  it('Login method should be called', fakeAsync(() => {
    spyOn(component, 'onLogin');
    component.onLogin();
    expect(component.onLogin).toHaveBeenCalled();
  }));

  it('Should call the Login method once on click', fakeAsync(() => {
    spyOn(component, 'onLogin');
    let btn = fixture.debugElement.query(By.css('.login'));
    btn.triggerEventHandler('click', null);
    expect(component.onLogin).toHaveBeenCalledTimes(1);
  }))

  it('Should render \'Login\' in header', () => {
    let headeTxt = fixture.debugElement.query(By.css('.loginHead'));
    expect(headeTxt.nativeElement.innerText).toContain('Login');
  });

});
