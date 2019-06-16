import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../../shared/user/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usersList: any = [];
  updateUserForm: FormGroup;
  
  ngOnInit() {
    this.update()
  }

  constructor(private actRoute: ActivatedRoute, public userService: UserService, public fb: FormBuilder, 
    private ngZone: NgZone, private router: Router) { 
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

  update(){
    this.updateUserForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: [''],
      status: ['']
    });
  }

  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.userService
      .Update(id, this.updateUserForm.value)
      .subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/user-list'))
      });
  }

}
