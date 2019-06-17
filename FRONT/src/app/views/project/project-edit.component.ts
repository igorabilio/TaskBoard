import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { ProjectService } from '../../shared/project/project.service';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html'
})
export class ProjectEditComponent implements OnInit {

  updateProjectForm = new FormGroup({
    id: new FormControl(),
    code: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    dueDate: new FormControl(),
    owner: new FormControl(),
    status: new FormControl()
  });

  ngOnInit() {
    this.update();
  }

  constructor(private actRoute: ActivatedRoute, public projectService: ProjectService, public fb: FormBuilder, 
    private ngZone: NgZone, private router: Router) { 

    var id = this.actRoute.snapshot.paramMap.get('id');
    this.projectService
      .GetById(id)
      .subscribe((data) => {
        this.updateProjectForm = this.fb.group({
          id: [data.id],
          code: [data.code],
          name: [data.name],
          description: [data.description],
          dueDate: data.dueDate.substring(0, 10),
          owner: [data.owner],
          status: [data.status]
        })
      });
  }

  update() {
    this.updateProjectForm = this.fb.group({
      id: [''],
      code: [''],
      name: [''],
      description: [''],
      dueDate: [''],
      owner: [''],
      status: ['']
    });
  }

  submitForm() { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.updateProjectForm.value.dueDate = new Date(this.updateProjectForm.value.dueDate).toUTCString();
    this.projectService
      .Update(id, this.updateProjectForm.value)
      .subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/project/project-list'))
      });
  }

}
