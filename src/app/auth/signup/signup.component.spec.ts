import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
      ],
      declarations: [SignupComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create signup component', () => {
    expect(component).toBeTruthy();
  });

  it('Signup form should be invalid', fakeAsync(() => {
    component.signupForm.controls['firstName'].setValue('');
    component.signupForm.controls['lastName'].setValue('');
    component.signupForm.controls['mobile'].setValue('');
    component.signupForm.controls['email'].setValue('');
    component.signupForm.controls['password'].setValue('');
    component.signupForm.controls['address'].setValue('');
    expect(component.signupForm.valid).toBeFalsy();
  }));

  it('Signup form should be valid', fakeAsync(() => {
    component.signupForm.controls['firstName'].setValue('firstName');
    component.signupForm.controls['lastName'].setValue('lastName');
    component.signupForm.controls['mobile'].setValue('938473647');
    component.signupForm.controls['email'].setValue('email@email.com');
    component.signupForm.controls['password'].setValue('Password12345');
    component.signupForm.controls['address'].setValue('address');
    expect(component.signupForm.valid).toBeTruthy();
  }));

  it('Signup method should be called', fakeAsync(() => {
    spyOn(component, 'onSignup');
    component.onSignup();
    expect(component.onSignup).toHaveBeenCalled();
  }));

  it('Should call the Signup method once on click', fakeAsync(() => {
    spyOn(component, 'onSignup');
    let btn = fixture.debugElement.query(By.css('.signup'));
    btn.triggerEventHandler('click', null);
    expect(component.onSignup).toHaveBeenCalledTimes(1);
  }))
});
