module.exports=function(app){

  var websites = [
    { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }
  ];

  const websiteModel = require('../model/website/website.model.server');

  app.post("/api/user/:userId/website", createWebsite);
  function createWebsite(req, res) {
    let userId = req.params.userId;
    var website = req.body;
    website._user = userId;
    websiteModel
      .createWebsite(website)
      .then(
        function(website) {
          res.status(200).send(website);
        },
        function(error) {
          res.status(400).send(error);
        }
      );
  }

  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  function findAllWebsitesForUser(req, res) {
    let userId = req.params.userId;
    websiteModel
      .findAllWebsitesForUser(userId)
      .then(
        function(websites) {
          res.status(200).send(websites);
        },
        function(error) {
          res.status(400).send(error);
        }
      );
  }

  app.get("/api/website/:websiteId", findWebsiteById);
  function findWebsiteById(req, res) {
    let websiteId = req.params.websiteId;
    websiteModel.findWebsiteById(websiteId)
      .then(
        function (website) {
          if (website){
            console.log("website found!");
            res.status(200).send(website);
          } else {
            console.log("no website found");
            res.status(404).send({error_msg: "website not found"});
          }
        },
        function (error) {
          //console.log(error);
          res.status(400).send(error);
        }
      );
  }

  app.put("/api/website/:websiteId", updateWebsite);
  function updateWebsite(req, res) {
    let websiteId = req.params.websiteId;
    let body = req.body;
    websiteModel.updateWebsite(websiteId, body)
      .then(
        function(website) {
          if (website){
            console.log("website found!");
            res.status(200).send(website);
          } else {
            console.log("no website found");
            res.status(404).send({error_msg: "website not found"});
          }
        },
        function (error) {
          //console.log(error);
          res.status(400).send(error);
        }
      );
  }

  app.delete("/api/website/:websiteId", deleteWebsite);
  function deleteWebsite(req, res) {
    let websiteId = req.params.websiteId;
    websiteModel.deleteWebsite(websiteId)
      .then(
        function (website) {
          if (website){
            console.log("website deleted!");
            res.status(200).send({message: "website deleted"});
          } else {
            console.log("no website found");
            res.status(404).send({error_msg: "website not found"});
          }
        },
        function (error) {
          console.log(error);
          res.status(400).send(error);
        }
      );
  }

  // app.post("/api/user/:userId/website", createWebsite);
  // function createWebsite(req, res) {
  //   let userId = req.params.userId;
  //   let body = req.body;
  //   for (var i in pages) {
  //     if (websites[i].name === body.name) {
  //       res.status(400).send("This website already exists");
  //       return
  //     }
  //   }
  //   var id = Math.random().toString();
  //   var website = {
  //     _id: id,
  //     name: body.name,
  //     developerId: userId,
  //     description: body.description
  //   };
  //   websites.push(website);
  //   res.status(200).json(website)
  // }

  // app.get("/api/user/:userId/website", findAllWebsitesForUser);
  // function findAllWebsitesForUser(req, res) {
  //   let userId = req.params.userId;
  //   let list = [];
  //   for (var i in websites) {
  //     if (websites[i].developerId === userId) {
  //       list.push(websites[i]);
  //     }
  //   }
  //   res.status(200).send(list);
  // }

  // app.get("/api/website/:websiteId", findWebsiteById);
  // function findWebsiteById(req, res) {
  //   let websiteId = req.params.websiteId;
  //   for (var i in websites) {
  //     if (websites[i]._id === websiteId) {
  //       res.status(200).send(websites[i]);
  //       return;
  //     }
  //   }
  //   res.status(404).send("websites not found!");
  // }


  // app.put("/api/website/:websiteId", updateWebsite);
  // function updateWebsite(req, res) {
  //   let websiteId = req.params.websiteId;
  //   let body = req.body;
  //   for (var i in websites) {
  //     if (websites[i]._id === websiteId) {
  //       // let newWebsite = {
  //       //   _id: websiteId,
  //       //   name: body.name,
  //       //   developerId: websites[i].developerId,
  //       //   description: body.description
  //       // };
  //
  //
  //
  //       websites[i].name = body.name;
  //       websites[i].description = body.description;
  //
  //
  //       res.send(websites[i]);
  //       return;
  //     }
  //   }
  //   res.status(404).send("not found!");
  // }

  // app.delete("/api/website/:websiteId", deleteWebsite);
  // function deleteWebsite(req, res) {
  //   let websiteId = req.params.websiteId;
  //   for (var i in websites) {
  //     if (websites[i]._id === websiteId) {
  //       websites.splice(i, 1);
  //       const response = {
  //         message: "website deleted"
  //       }
  //       res.status(200).json(response);
  //       return;
  //     }
  //   }
  //   console.log('not deleted');
  //   let response = {
  //     message: "website not found"
  //   }
  //   res.status(404).send(response)
  // }

};
