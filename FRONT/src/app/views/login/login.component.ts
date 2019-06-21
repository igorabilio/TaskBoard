import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit { 

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  loginError = false;

  ngOnInit() {
    this.add();
  }

  add() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  constructor(public fb: FormBuilder, private ngZone: NgZone, private router: Router) { 

  }

  submitForm(){
    if(this.loginForm.value.username == "admin" && this.loginForm.value.password == "admin") {
      this.ngZone.run(() => {
        return this.router.navigateByUrl('/dashboard');
      });
    } else {
      this.loginError = true;
    }
  }
}
