import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  _users = []

  addANewUser(user:{}){
    // this._users.push(user)
    this._users.push(user)
  }

  getUsers(){
    return this._users
  }
  constructor() { }
}
