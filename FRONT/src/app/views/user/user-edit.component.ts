import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { UserService } from '../../shared/user/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  updateUserForm = new FormGroup({
    user_id: new FormControl(),
    user_name: new FormControl(),
    user_username: new FormControl(),
    user_email: new FormControl(),
    user_status: new FormControl()
  });

  ngOnInit() {
    this.update();
  }

  constructor(private actRoute: ActivatedRoute, public userService: UserService, public fb: FormBuilder, private ngZone: NgZone, private router: Router) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.userService
      .GetById(id)
      .subscribe((data) => {
        this.updateUserForm = this.fb.group({
          id: [data.id],
          name: [data.name],
          username: [data.username],
          email: [data.email],
          status: [data.status]
        })
      });
  }

  update() {
    this.updateUserForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: [''],
      status: ['']
    });
  }

  submitForm() { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.userService
      .Update(id, this.updateUserForm.value)
      .subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/user/user-list'))
      });
  }

}
