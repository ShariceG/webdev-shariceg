import { Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';


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

  @ViewChild('profileForm') profileForm: NgForm;

  constructor( private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  userId: String;
  user: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      console.log('user id: ' + this.userId);
    });

    this.userService.findUserById(this.userId)
      .subscribe(
        (data: any) => {
          this.user = data;
        }
      );
  }

  updateUser() {
    console.log(this.user);

    const body = {
      username: this.user.username,
      email: this.user.email,
      firstName: this.user.firstName,
      lastName: this.user.lastName
    };

    this.userService.updateUser(this.user, body)
      .subscribe(
        (data: any) => {
          this.user = data;
        }
      );
  }

  websites() {
    this.router.navigate(['/user', this.user._id, 'website' ]);
  }

  profile() {
    this.router.navigate(['/user', this.user._id]);
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => {
          this.router.navigate(['/login']);
        }
      );
  }



}
