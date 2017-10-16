import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: String;
  user: User;
  username: String;
  email: String;
  firstName: String;
  lastName: String;

  // inject route info in constructor
  constructor(
          private userService: UserService,
          private activatedRouter: ActivatedRoute) { }

  // notify the changes of the route
  ngOnInit() {
    // invoke a function that can pass the value of the parameters
    this.activatedRouter.params.subscribe(params => {
      this.userId = params['uid'];
      this.user = this.userService.findUserById(this.userId);
      this.username = this.user['username'];
      // alert('userId: ' + this.userId);
    });
  }


}
