import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TaskService } from '../../shared/task/task.service';
import { UserService } from '../../shared/user/user.service';
import { ProjectService } from '../../shared/project/project.service';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html'
})
export class TaskAddComponent implements OnInit {

  addTaskForm: FormGroup;
  userList: any = [];
  projectList: any = [];
  submitted = false;

  ngOnInit() {
    this.add();
    
  }

  constructor(public taskService: TaskService, public userService: UserService, public projectService: ProjectService, 
    public fb: FormBuilder, private ngZone: NgZone, private router: Router) { 
    this.getUserForSelect();
    this.getProjectForSelect();
  }

  add() {
    this.addTaskForm = this.fb.group({
      projectId: ['', Validators.required],
      code: ['', [Validators.required, Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      dueDate: ['', Validators.required],
      status: ['', Validators.required],
      assignedTo: ['', Validators.required]
    });
  }

  get f() { return this.addTaskForm.controls; }

  submitForm() {
    this.submitted = true;
    
    if (this.addTaskForm.invalid) { return; }

    this.taskService
      .Add(this.addTaskForm.value)
      .subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/task/task-list'));
      });
  }

  getUserForSelect(){
    this.userService
      .GetAll()
      .subscribe((data: {}) => {
        this.userList = data;
      });
  }

  getProjectForSelect(){
    this.projectService
      .GetAll()
      .subscribe((data: {}) => {
        this.projectList = data;
      });
  }

}
