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
        let tasks: any = [];

        this.projectsList.forEach(project => {

          if (project.status == "A") {
            this.qtdActiveProjects++;
          }

          this.taskService
            .GetAllByProject(project.id)
            .subscribe((data) => {
              tasks = data;
              project.qtdTasks = tasks.length;
              let qtdDoneTasks: number = 0;
              
              tasks.forEach(task => {
                console.log(task);
                //if (task.status == "D") {
                  qtdDoneTasks++;
                //}
              });

              project.qtdDoneTasks = qtdDoneTasks;
            });
          //console.log(project);
          console.log(project.qtdDoneTasks);
          let percByProj: number = 0;
          if (project.qtdDoneTasks > 0) {
            percByProj = (project.qtdDoneTasks / project.qtdTasks) * 100;
          }
          project.percDoneTasks = percByProj.toString() + "%";
        });

        let perc = this.qtdActiveProjects / this.qtdProjects * 100;
        this.percActiveProjects = perc.toString() + "%";
      });
  }

  getTasksInfo() {
    let today = new Date().toLocaleString()
    this.qtdActiveTasks = 0;
    this.qtdOverdueTasks = 0;

    this.taskService
      .GetAll()
      .subscribe((data) => {
        this.tasksList = data;
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

  getUsersInfo() {
    this.qtdActiveUsers = 0;

    this.userService
      .GetAll()
      .subscribe((data) => {
        this.usersList = data;
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
