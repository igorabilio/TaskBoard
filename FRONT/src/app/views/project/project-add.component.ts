import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProjectService } from '../../shared/project/project.service';
import { UserService } from '../../shared/user/user.service';


@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html'
})
export class ProjectAddComponent implements OnInit {

  addProjectForm: FormGroup;
  userList: any = [];
  submitted = false;

  ngOnInit() {
    this.add();
    
  }

  constructor(public projectService: ProjectService, public userService: UserService, public fb: FormBuilder, private ngZone: NgZone, private router: Router) { 
    this.getUserForSelect();
  }

  add() {
    this.addProjectForm = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(150)]],
      name: ['', [Validators.required, Validators.maxLength(150)]],
      description: [''],
      dueDate: ['', Validators.required],
      owner: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  get f() { return this.addProjectForm.controls; }

  submitForm() {
    this.submitted = true;
    
    if (this.addProjectForm.invalid) { return; }

    this.projectService
      .Add(this.addProjectForm.value)
      .subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/project/project-list'));
      });
  }

  getUserForSelect(){
    this.userService
      .GetAll()
      .subscribe((data: {}) => {
        this.userList = data;
      });
  }

}
