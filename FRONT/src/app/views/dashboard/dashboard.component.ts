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

  tasksByProj: any = [];
  qtdTasks: any;
  qtdActiveTasks: any;
  percActiveTasks: any;
  qtdOverdueTasks: any;
  percOverdueTasks: any;

  qtdUsers: any;
  qtdActiveUsers: any;
  percActiveUsers: any;

  ngOnInit() {
    this.getProjectsInfo();
    this.getTasksInfo();
    this.getUsersInfo();
  }

  constructor(public projectService: ProjectService, public taskService: TaskService, public userService: UserService) {
    
    
  }

  getProjectsInfo() {
    this.qtdActiveProjects = 0;

    this.projectService
      .GetAll()
      .subscribe((data) => {
        this.projectsList = data;
        this.qtdProjects = this.projectsList.length;

        this.projectsList.forEach(proj => {
          if (proj.status == "A") {
            this.qtdActiveProjects++;
          }

          proj.qtdTasks = 2;
          proj.qtdDoneTasks = 1;
          proj.percDoneTasks = (proj.qtdDoneTasks / proj.qtdTasks * 100).toString() + "%";
        });

        let perc = this.qtdActiveProjects / this.qtdProjects * 100;
        this.percActiveProjects = perc.toString() + "%";
      });
  }

  getTasksInfo() {
    let today = new Date().toLocaleString()
    let tasksList: any = [];
    this.qtdActiveTasks = 0;
    this.qtdOverdueTasks = 0;

    this.taskService
      .GetAll()
      .subscribe((data) => {
        tasksList = data;
        this.qtdTasks = tasksList.length;

        tasksList.forEach(task => {
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

  getUsersInfo() {
    let usersList: any = [];
    this.qtdActiveUsers = 0;

    this.userService
      .GetAll()
      .subscribe((data) => {
        usersList = data;
        this.qtdUsers = usersList.length;

        usersList.forEach(user => {
          if (user.status == "A") {
            this.qtdActiveUsers++;
          }
        });

        let perc = this.qtdActiveUsers / this.qtdUsers * 100;
        this.percActiveUsers = perc.toString() + "%";
      });
  }

}
