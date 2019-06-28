import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TaskService } from '../../shared/task/task.service';
import { UserService } from '../../shared/user/user.service';
import { ProjectService } from '../../shared/project/project.service';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html'
})
export class TaskEditComponent implements OnInit {

  updateTaskForm: FormGroup;
  userList: any = [];
  projectList: any = [];
  submitted = false;

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
          projectId: [data.projectId, Validators.required],
          code: [data.code, [Validators.required, Validators.maxLength(10)]],
          name: [data.name, [Validators.required, Validators.maxLength(150)]],
          description: [data.description, [Validators.required, Validators.maxLength(500)]],
          dueDate: [data.dueDate.substring(0, 10), Validators.required],
          status: [data.status, Validators.required],
          assignedTo: [data.assignedTo, Validators.required]
        })
      });
  }

  update() {
    this.updateTaskForm = this.fb.group({
      id: [''],
      projectId: ['', Validators.required],
      code: ['', [Validators.required, Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      dueDate: ['', Validators.required],
      status: ['', Validators.required],
      assignedTo: ['', Validators.required]
    });
  }

  get f() { return this.updateTaskForm.controls; }

  submitForm() { 
    this.submitted = true;
    
    if (this.updateTaskForm.invalid) { return; }

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
