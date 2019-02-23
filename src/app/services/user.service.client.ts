import { Injectable } from '@angular/core';
import {User} from '../Models/user.model.client';

@Injectable()

export class UserService {
  constructor() {}

  users: User[] = [new User('123', 'alice',  'alice', 'Alice', 'Wonder', 'a@email.com'),
                   new User('234', 'bob', 'bob', 'Bob', 'Marley', 'b@email.com'),
                   new User('345', 'charly', 'charly', 'Charly', 'Garcia', 'c@email.com'),
                   new User('456', 'jannuzi', 'jannuzi', 'Jose', 'Annuzi', 'j@email.com')
  ];

  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  createUser(user: User) {
    user._id = Math.random().toString();
    this.users.push(user);

  }

  findUserById(userId: string) {
    for ( let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users[x];
      }
    }
  }

  findUserByUsername(username: string) {
    for ( let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
  }

  findUserByCredentials(username: string, password: string) {
    for ( let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {
        return this.users[x];
      }
    }
  }

  updateUser(userId: string, user: any) {
    const newUser = user;
    newUser._id = userId;
    for ( let x = 0; x < this.users.length; x++) {
      if (this.users[x] === user) {
        this.users[x] = newUser;
      }
    }
  }

  deleteUser(userId: string ) {
    for ( let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users.splice(x, 1);
      }
    }
  }
}
