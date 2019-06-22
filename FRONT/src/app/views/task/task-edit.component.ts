import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { TaskService } from '../../shared/task/task.service';
import { UserService } from '../../shared/user/user.service';
import { ProjectService } from '../../shared/project/project.service';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html'
})
export class TaskEditComponent implements OnInit {

  updateTaskForm = new FormGroup({
    id: new FormControl(),
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
    this.update();
  }

  constructor(private actRoute: ActivatedRoute, public taskService: TaskService, public userService: UserService, public projectService: ProjectService,
    public fb: FormBuilder, private ngZone: NgZone, private router: Router) { 

    this.getUserForSelect();
    this.getProjectForSelect();

    var id = this.actRoute.snapshot.paramMap.get('id');
    this.taskService
      .GetById(id)
      .subscribe((data) => {
        this.updateTaskForm = this.fb.group({
          id: [data.id],
          projectId: [data.projectId],
          code: [data.code],
          name: [data.name],
          description: [data.description],
          dueDate: data.dueDate.substring(0, 10),
          status: [data.status],
          assignedTo: [data.assignedTo]
        })
      });
  }

  update() {
    this.updateTaskForm = this.fb.group({
      id: [''],
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
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.updateTaskForm.value.dueDate = new Date(this.updateTaskForm.value.dueDate).toUTCString();
    this.taskService
      .Update(id, this.updateTaskForm.value)
      .subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/task/task-list'))
      });
  }

  delete() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    return this.taskService
      .Delete(id)
      .subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/task/task-list'))
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
