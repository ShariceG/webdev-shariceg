import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';


export class User {
  _id: String;
  username: String;
  password: String;

  firstName: String;
  lastName: String;

  constructor(_id, username, password, firstName, lastName, email) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }

}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  user: User;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.userService.findUserById(params['uid']);
    });
  }

  updateUser(user) {
    console.log(this.user);
  }

  websites() {
    this.router.navigate(['/user', this.user._id, 'website' ]);
  }



}
