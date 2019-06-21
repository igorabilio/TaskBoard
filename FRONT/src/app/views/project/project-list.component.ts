import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../shared/project/project.service';
import { UserService } from '../../shared/user/user.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {

  projectsList: any = [];
  userList: any = [];

  ngOnInit() {
    this.getAll();
  }

  constructor(public projectService: ProjectService, public userService: UserService) { 
  }

  getAll() {
    return this.projectService
      .GetAll()
      .subscribe((data: {}) => {
        this.projectsList = data;
        this.projectsList.forEach(proj => {
          this.userService
            .GetById(proj.owner)
            .subscribe((user) => {
              proj.owner = user.name;
            });
        });
      });
  }

  delete(data) {
    var index = index = this.projectsList
      .map(x => {return x.name})
      .indexOf(data.name);

    return this.projectService
      .Delete(data.id)
      .subscribe(res => {
        this.projectsList.splice(index, 1)
      });
  }

}
