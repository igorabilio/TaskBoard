import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../shared/user/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;
  UserArr: any = [];

  ngOnInit() {
    this.add()
  }

  constructor(public fb: FormBuilder, private ngZone: NgZone, private router: Router, public userService: UserService){ 

  }

  add() {
    this.userForm = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
    })
  }

  submitForm() {
    this.userService
      .Add(this.userForm.value)
      .subscribe(res => {
        console.log('User added!')
        this.ngZone.run(() => this.router.navigateByUrl('/user-list'))
      });
    }

}
