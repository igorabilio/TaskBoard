import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../shared/project/project.service';
import { TaskService } from '../../shared/task/task.service';
import { UserService } from '../../shared/user/user.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  projectsList: any = [];
  qtdProjects: any;
  qtdActiveProjects: any;
  percActiveProjects: any;

  tasksList: any = [];
  qtdTasks: any;
  qtdActiveTasks: any;
  percActiveTasks: any;
  qtdOverdueTasks: any;
  percOverdueTasks: any;

  usersList: any = [];
  qtdUsers: any;
  qtdActiveUsers: any;
  percActiveUsers: any;

  ngOnInit() {
    this.getQtdActiveProjects();
    this.getQtdActiveTasks();
    this.getQtdActiveUsers();
  }

  constructor(public projectService: ProjectService, public taskService: TaskService, public userService: UserService) {
    
    
  }

  getQtdActiveProjects() {
    this.projectService
      .GetAll()
      .subscribe((data) => {
        this.projectsList = data;
        this.qtdActiveProjects = 0;
        this.qtdProjects = this.projectsList.length;
        this.projectsList.forEach(project => {
          if (project.status == "A") {
            this.qtdActiveProjects++;
          }
        });
        let perc = this.qtdActiveProjects / this.qtdProjects * 100;
        this.percActiveProjects = perc.toString() + "%";
      });
  }

  getQtdActiveTasks() {
    this.taskService
      .GetAll()
      .subscribe((data) => {
        let today = new Date().toLocaleString()
        this.tasksList = data;
        this.qtdActiveTasks = 0;
        this.qtdOverdueTasks = 0;
        this.qtdTasks = this.tasksList.length;
        this.tasksList.forEach(task => {
          if (task.status == "A") {
            this.qtdActiveTasks++;
            let dd = new Date(task.dueDate).toLocaleString();
            if (dd < today) {
              this.qtdOverdueTasks++;
            }
          }
        });
        let perc1 = this.qtdActiveTasks / this.qtdTasks * 100;
        this.percActiveTasks = perc1.toString() + "%";
        let perc2 = this.qtdOverdueTasks / this.qtdActiveTasks * 100;
        this.percOverdueTasks = perc2.toString() + "%";
      });
  }

  getQtdActiveUsers() {
    this.userService
      .GetAll()
      .subscribe((data) => {
        this.usersList = data;
        this.qtdActiveUsers = 0;
        this.qtdUsers = this.usersList.length;
        this.usersList.forEach(user => {
          if (user.status == "A") {
            this.qtdActiveUsers++;
          }
        });
        let perc = this.qtdActiveUsers / this.qtdUsers * 100;
        this.percActiveUsers = perc.toString() + "%";
      });
  }

}
