import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user/user.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html'
})
export class UserAddComponent implements OnInit {

  addUserForm = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    status: new FormControl()
  });

  ngOnInit() {
    this.add();
  }

  constructor(public userService: UserService, public fb: FormBuilder, private ngZone: NgZone, private router: Router) { 

  }

  add() {
    this.addUserForm = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
      status: ['']
    });
  }

  submitForm() {
    this.userService
      .Add(this.addUserForm.value)
      .subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/user/user-list'));
      });
  }

}
