import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ProjectService } from '../../shared/project/project.service';


@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html'
})
export class ProjectAddComponent implements OnInit {

  addProjectForm = new FormGroup({
    code: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    dueDate: new FormControl(),
    owner: new FormControl(),
    status: new FormControl()
  });

  ngOnInit() {
    this.add();
  }

  constructor(public projectService: ProjectService, public fb: FormBuilder, private ngZone: NgZone, private router: Router) { 

  }

  add() {
    this.addProjectForm = this.fb.group({
      code: [''],
      name: [''],
      description: [''],
      dueDate: [''],
      owner: [''],
      status: ['']
    });
  }

  submitForm() {
    this.projectService
      .Add(this.addProjectForm.value)
      .subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/project/project-list'));
      });
  }

}
