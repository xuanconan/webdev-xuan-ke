import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

// below is an angular component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hello: String = 'Hello from the component';
  // create component attached to username
  username: String;
  password: String;

  // privately declared variable
  constructor(private userService: UserService,
              private router: Router) { }

  // function to be call from outside

  login(username: String, password: String) {
    // alert('username: ' + username);
    // use the router to navigate to certain components

    const user: User = this.userService.findUserByCredentials(username, password);
    // if there is a user, then navigator, will have userID passed too
    if (user) {
      this.router.navigate(['/profile', user._id]);
    }

    // if (username === 'alice' && password === '123') {
    //   this.router.navigate(['/profile']);
    // }
  }



  ngOnInit() {
  }

}
