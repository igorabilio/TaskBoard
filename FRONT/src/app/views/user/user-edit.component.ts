import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../shared/user/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  updateUserForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.update();
  }

  constructor(public fb: FormBuilder, public userService: UserService, private actRoute: ActivatedRoute, private ngZone: NgZone, 
    private router: Router) { 

    var id = this.actRoute.snapshot.paramMap.get('id');
    
    this.userService
      .GetById(id)
      .subscribe((data) => {
        this.updateUserForm = this.fb.group({
          id: [data.id],
          name: [data.name, [Validators.required, Validators.maxLength(150)]],
          username: [data.username, [Validators.required, Validators.maxLength(150)]],
          email: [data.email, [Validators.required, Validators.email, Validators.maxLength(150)]],
          status: [data.status, Validators.required]
        });
      });
  }

  update() {
    this.updateUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(150)]],
      username: ['', [Validators.required, Validators.maxLength(150)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
      status: ['', Validators.required]
    });
  }

  get f() { return this.updateUserForm.controls; }

  submitForm() { 
    this.submitted = true;
    
    if (this.updateUserForm.invalid) { return; }
    
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.userService
      .Update(id, this.updateUserForm.value)
      .subscribe(() => {
        this.ngZone.run(() => this.router.navigateByUrl('/user/user-list'));
      });
  }

  delete() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    return this.userService
      .Delete(id)
      .subscribe(() => {
        this.ngZone.run(() => this.router.navigateByUrl('/user/user-list'));
      });
  }

}
