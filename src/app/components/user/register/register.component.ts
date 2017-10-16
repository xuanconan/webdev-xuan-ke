import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  username: String;
  password: String;
  passwordvalid: String;

  constructor(private userService: UserService,
              private router: Router) { }

  // function to be call from register
  register(username: String, password: String, passwordvalid: String) {

    // if there is a user, then navigator, will have userID passed too
    if (this.userService.findUserByUsername(username)) {
      alert('Username "' + username + '" already exists');
    }
    if (password != passwordvalid) {
      alert('Please validate your password!');
    }

    const newUser: User = {
      _id: this.userService.newId(),
      username: this.username,
      password: this.password,
      firstName: '',
      lastName:''
    };

    this.userService.createUser(newUser);
    this.router.navigate(['/profile/', newUser._id]);

  }

  ngOnInit() {
  }

}
