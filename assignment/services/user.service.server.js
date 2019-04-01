

module.exports=function(app) {

  var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland", email: "a@email.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "b@email.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "c@email.com"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "aj@email.com"}
  ];

  var db_users = [
    {username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland", email: "a@email.com"},
    {username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "b@email.com"},
    {username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "c@email.com"},
    {username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "aj@email.com"}
  ];

  const userModel = require('../model/user/user.model.server');

  /*
  def: add users from
   */
  app.post("/api/populate", populateUsers);
  function populateUsers(req, res) {
    userModel.populateUsers(db_users)
      .then(
        function(users) {
          console.log("users populated");
          res.status(200).send(users);
        },
        function(error) {
          if (error) {
            console.log(error);
            res.status(400).send(error);
          }
        }
      );
  }


  app.post("/api/user", createUser);
  function createUser(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(
        function (user) {
          res.status(200).send(user);
        },
        function (error) {
          console.log("create user error: " + error);
          res.status(400).send(error);
        }
      );
  }

  app.get("/api/user", findUser);
  function findUser(req,res){
    if (req.query["password"]){
      findUserByCredentials(req,res);
    } else {
      findUserByUsername(req, res);
    }
  }


  function findUserByUsername(req, res) {
    let username = req.query["username"];
    userModel.findUserByUsername(username)
      .then(
        function (user) {
          console.log("user found!");
          res.status(200).send(user);
        },
        function (error) {
          console.log(error);
          res.status(400).send(error);
        }
      );
  }

  app.get("/api/user", findUserByCredentials);
  function findUserByCredentials(req, res) {
    let username = req.query["username"];
    let password = req.query["password"];
    userModel.findUserByCredentials(username, password)
      .then(
        function (user) {
          if (user){
            console.log("user found!");
            res.status(200).send(user);
          } else {
            console.log("no user found");
            res.status(404).send({error_msg: "user not found"});
          }
        },
        function (error) {
          console.log(error);
          res.status(400).send(error);
        }
      );
  }

  app.get("/api/user/:userId", findUserById);
  function findUserById(req, res) {
    let userId = req.params.userId;
    userModel.findUserById(userId)
      .then(
        function (user) {
          if (user){
            console.log("user found!");
            res.status(200).send(user);
          } else {
            console.log("no user found");
            res.status(404).send({error_msg: "user not found"});
          }
        },
        function (error) {
          //console.log(error);
          res.status(400).send(error);
        }
      );
  }

  app.put("/api/user/:userId", updateUser);

  function updateUser(req, res) {
    let userId = req.params.userId;
    let body = req.body;
    console.log(body);
    let user = {
      username: body.username,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email
    };
    userModel.updateUser(userId, body)
      .then(
      function (user) {
        if (user){
          console.log("user updated!");
          res.status(200).send(user);
        } else {
          console.log("no user found");
          res.status(404).send({error_msg: "user not found"});
        }
      },
      function (error) {
        //console.log(error);
        res.status(400).send(error);
      }
    );
  }

  app.delete("/api/user/:userId", deleteUser);
  function deleteUser(req, res) {
    let userId = req.params.userId;
    userModel.deleteUser(userId)
      .then(
        function (user) {
          if (user){
            console.log("user deleted!");
            res.status(200).send({message: "user deleted"});
          } else {
            console.log("no user found");
            res.status(404).send({error_msg: "user not found"});
          }
        },
        function (error) {
          console.log(error);
          res.status(400).send(error);
        }
      );
  }





// function createUser(req, res) {
  //
  //   var body = req.body;
  //   for (var i in users) {
  //     if (users[i].username === body.username) {
  //       res.status(400).send("This username already exists");
  //       return
  //     }
  //   }
  //
  //   var id = Math.random().toString();
  //   var user = {
  //     _id: id,
  //     username: body.username,
  //     password: body.password,
  //     firstName: "",
  //     lastName: "",
  //     email: ""}
  //   users.push(user);
  //   res.status(200).json(user)
  // }
  //
  // function findUser(req,res){
  //   if (req.query["password"]){
  //     findUserByCredentials(req,res);
  //   } else {
  //     findUserByUsername(req, res);
  //   }
  // }
  // function findUserByUsername(req, res) {
  //   let username = req.query["username"];
  //   for (var i in users) {
  //     if (users[i].username === username) {
  //       res.status(200).send(users[i]);
  //       return
  //     }
  //   }
  //   res.status(404).send("user not found")
  // }
  // app.get("/api/user", findUserByCredentials);
  // function findUserByCredentials(req, res) {
  //   let username = req.query["username"];
  //   let password = req.query["password"];
  //   for (var i in users) {
  //     if ((users[i].username === username) && (users[i].password === password)) {
  //       res.status(200).send(users[i]);
  //       // console.log(users[i]);
  //       return;
  //     }
  //   }
  //   res.status(404).send("user not found!");
  // }
  //
  // app.get("/api/user/:userId", findUserById);
  // function findUserById(req, res) {
  //   let userId = req.params.userId;
  //   for (var i in users) {
  //     if (users[i]._id === userId) {
  //       res.send(users[i]);
  //       return
  //     }
  //   }
  //   res.status(404).send("user not found!");
  // }
  //
  // app.put("/api/user/:userId", updateUser);
  //
  // function updateUser(req, res) {
  //   let userId = req.params.userId;
  //   let body = req.body;
  //   console.log(body);
  //   for (var i in users) {
  //     if (users[i]._id === userId) {
  //
  //
  //       users[i].username = body.username;
  //       users[i].firstName = body.firstName;
  //       users[i].lastName = body.lastName;
  //       users[i].email = body.email;
  //
  //
  //       res.send(users[i]);
  //       return;
  //     }
  //   }
  //   res.status(404).send("not found!");
  // }
  // app.delete("/api/user/:userId", deleteUser);
  // function deleteUser(req, res) {
  //   let userId = req.params.userId;
  //   for (var i in users) {
  //     if (users[i]._id === userId) {
  //       users.splice(i, 1);
  //       res.status(200).send("user deleted");
  //       return;
  //     }
  //   }
  //   res.status(404).send("user not found")
  // }


}
