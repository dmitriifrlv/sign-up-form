import { Component, OnInit } from '@angular/core';
import { SignUpService } from "../../services/sign-up.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[]
  constructor(private _userService:SignUpService) { }

  ngOnInit() {
    this.users=this._userService._users
  }

}
