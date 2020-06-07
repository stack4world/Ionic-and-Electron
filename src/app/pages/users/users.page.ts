import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: User;

  constructor( private apisvc: ApiService) { }

  ngOnInit() {
    this.apisvc.getUsers().subscribe(userdata => {
      this.users = userdata.body['data'];
      console.log(this.users);
    })
  }

}
