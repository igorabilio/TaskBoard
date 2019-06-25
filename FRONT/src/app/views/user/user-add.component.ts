import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user/user.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html'
})
export class UserAddComponent implements OnInit {

  addUserForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.add();
  }

  constructor(public fb: FormBuilder, public userService: UserService, private ngZone: NgZone, private router: Router) { 

  }

  add() {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(150)]],
      username: ['', [Validators.required, Validators.maxLength(150)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
      status: ['', Validators.required]
    });
  }

  get f() { return this.addUserForm.controls; }

  submitForm() {
    this.submitted = true;
    
    if (this.addUserForm.invalid) { return; }

    this.userService
      .Add(this.addUserForm.value)
      .subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/user/user-list'));
      });
  }

}
