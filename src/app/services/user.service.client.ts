import { Injectable } from '@angular/core';
import {User} from '../Models/user.model.client';
import {Observable} from 'rxjs';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';



@Injectable()

export class UserService {
  constructor(private _http: HttpClient, private router: Router) {
  }

  baseUrl = environment.baseUrl;

  users: User[] = [new User('123', 'alice', 'alice', 'Alice', 'Wonder', 'a@email.com'),
    new User('234', 'bob', 'bob', 'Bob', 'Marley', 'b@email.com'),
    new User('345', 'charly', 'charly', 'Charly', 'Garcia', 'c@email.com'),
    new User('456', 'jannuzi', 'jannuzi', 'Jose', 'Annuzi', 'j@email.com')
  ];

  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };


  createUser(username: String, password: String) {
    const body = {
      username: username,
      password: password
    };
    return this._http.post(this.baseUrl + 'api/user', body);
  }

  findUserById(userId: String) {
    return this._http.get(this.baseUrl + 'api/user/' + userId)
      .map(
        (res: Response) => {
          return res;
          // return data;
        }
      );
  }

  findUserByUsername(username: String) {
    return this._http.get(this.baseUrl + 'api/user?username=' + username)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }

  findUserByCredentials(username: String, password: String) {
    const url = this.baseUrl + 'api/user?username=' + username + '&password=' + password;
    console.log(url);
    console.log('HERE');
    return this._http.get(url)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }

  updateUser(user: any, body: any) {
    const url = this.baseUrl + 'api/user/' + user._id;
    console.log(body);
    return this._http.put(url, body);
  }

  deleteUser(userId: String) {
    return this._http.delete(this.baseUrl + 'api/user/' + userId);
  }
}

  // createUser(user: User) {
  //   user._id = Math.random().toString();
  //   this.users.push(user);
  //
  // }

  // findUserById(userId: string) {
  //   for ( let x = 0; x < this.users.length; x++) {
  //     if (this.users[x]._id === userId) {
  //       return this.users[x];
  //     }
  //   }
  // }
  //
  // findUserByUsername(username: string) {
  //   for ( let x = 0; x < this.users.length; x++) {
  //     if (this.users[x].username === username) {
  //       return this.users[x];
  //     }
  //   }
  // }
  //
  // findUserByCredentials(username: string, password: string) {
  //   for ( let x = 0; x < this.users.length; x++) {
  //     if (this.users[x].username === username && this.users[x].password === password) {
  //       return this.users[x];
  //     }
  //   }
  // }

  // updateUser(userId: string, user: any) {
  //   const newUser = user;
  //   newUser._id = userId;
  //   for ( let x = 0; x < this.users.length; x++) {
  //     if (this.users[x] === user) {
  //       this.users[x] = newUser;
  //     }
  //   }
  // }


//   deleteUser(userId: string ) {
//     for ( let x = 0; x < this.users.length; x++) {
//       if (this.users[x]._id === userId) {
//         this.users.splice(x, 1);
//       }
//     }
//   }
// }
