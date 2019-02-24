import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../Models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm') registerForm: NgForm;

  username: string;
  password: string;
  vpass: string;

  errorFlag: boolean;
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMessage = 'Passwords must match!';
  }


  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.vpass = this.registerForm.value.vpass;

    if (this.vpass === this.password) {
      const user = new User('', this.username, this.password, '', '', '');
      this.userService.createUser(user);
      this.errorFlag = false;
      this.router.navigate(['/user', user._id]);
    } else {
      this.errorFlag = true;
    }
  }

  // disabled() {
  //   this.username = this.registerForm.value.username;
  //   this.password = this.registerForm.value.password;
  //   this.vpass = this.registerForm.value.vpass;
  //   return !(this.username && (this.password === this.vpass));
  // }

}
