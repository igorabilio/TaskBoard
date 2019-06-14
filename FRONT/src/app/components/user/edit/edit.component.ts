import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
          email: [data.email]
        })
      });
  }

  update(){
    this.updateUserForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: ['']
    });
  }

  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.userService
      .Update(id, this.updateUserForm.value)
      .subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/users-list'))
      });
  }

}
