import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from '../../shared/task/task.service';
import { UserService } from '../../shared/user/user.service';
import { ProjectService } from '../../shared/project/project.service';

@Component({
  selector: 'app-task',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  taskList: any = [];

  ngOnInit() {
    var projId = this.actRoute.snapshot.queryParamMap.get('projectId');
    if (projId) {
      this.getByProject(projId);
    } else {
      this.getAll();
    }
    
  }

  constructor(public taskService: TaskService, public userService: UserService, public projectService: ProjectService, private actRoute: ActivatedRoute,) { 

  }

  getAll() {
    return this.taskService
      .GetAll()
      .subscribe((data: {}) => {
        this.taskList = data;

        this.taskList.forEach(task => {

          this.userService
            .GetById(task.assignedTo)
            .subscribe((user) => {
              task.assignedTo = user.name;
            });
          
          this.projectService
            .GetById(task.projectId)
            .subscribe((project) => {
              task.projectId = project.name;
            });

        });
      });
  }

  getByProject(projectId) {
    return this.taskService
      .GetAllByProject(projectId)
      .subscribe((data: {}) => {
        this.taskList = data;

        this.taskList.forEach(task => {

          this.userService
            .GetById(task.assignedTo)
            .subscribe((user) => {
              task.assignedTo = user.name;
            });
          
          this.projectService
            .GetById(task.projectId)
            .subscribe((project) => {
              task.projectId = project.name;
            });
            
        });
      });
  }

}
