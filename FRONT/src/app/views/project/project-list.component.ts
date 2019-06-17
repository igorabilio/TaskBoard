import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../shared/project/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {

  projectsList: any = [];

  ngOnInit() {
    this.getAll();
  }

  constructor(public projectService: ProjectService) { }

  getAll() {
    return this.projectService
      .GetAll()
      .subscribe((data: {}) => {
        this.projectsList = data;
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
        console.log('Project deleted!')
      });
  }

}
