import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  usersList: any = [];

  ngOnInit() {
    this.getAll();
  }

  constructor(public userService: UserService) { }

  getAll() {
    return this.userService
      .GetAll()
      .subscribe((data: {}) => {
        this.usersList = data;
      });
  }

  delete(data){
    var index = index = this.usersList
      .map(x => {return x.name})
      .indexOf(data.name);

    return this.userService
      .Delete(data.id)
      .subscribe(res => {
        this.usersList.splice(index, 1)
        console.log('User deleted!')
      });
  }

}
