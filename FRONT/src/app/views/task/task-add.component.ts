import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { TaskService } from '../../shared/task/task.service';
import { UserService } from '../../shared/user/user.service';
import { ProjectService } from '../../shared/project/project.service';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html'
})
export class TaskAddComponent implements OnInit {

  addTaskForm = new FormGroup({
    projectId: new FormControl(),
    code: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    dueDate: new FormControl(),
    status: new FormControl(),
    assignedTo: new FormControl()
  });

  userList: any = [];
  projectList: any = [];

  ngOnInit() {
    this.add();
    
  }

  constructor(public taskService: TaskService, public userService: UserService, public projectService: ProjectService, public fb: FormBuilder, private ngZone: NgZone, private router: Router) { 
    this.getUserForSelect();
    this.getProjectForSelect();
  }

  add() {
    this.addTaskForm = this.fb.group({
      projectId: [''],
      code: [''],
      name: [''],
      description: [''],
      dueDate: [''],
      status: [''],
      assignedTo: ['']
    });
  }

  submitForm() {
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
