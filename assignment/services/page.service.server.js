module.exports=function(app){

  pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
  ];

  const pageModel = require('../model/page/page.model.server');


  app.post("/api/website/:websiteId/page", createPage);
  function createPage(req, res) {
    let websiteId = req.params.websiteId;
    let body = req.body;
    body._website = websiteId;
    pageModel
      .createPage(body)
      .then(
        function(page) {
          res.status(200).send(page);
        },
        function(error){
          res.status(400).send(error);
        }
      );
  }

  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  function findAllPagesForWebsite(req, res) {
    let websiteId = req.params.websiteId;
    pageModel.findAllPagesForWebsite(websiteId)
      .then(
        function(pages) {
          res.status(200).send(pages);
        },
        function(error) {
          res.status(400).send(error);
        }
      );
  }

  app.get("/api/page/:pageId", findPageById);
  function findPageById(req, res) {
    let pageId = req.params.pageId
    pageModel.findPageById(pageId)
      .then(
        function (page) {
          if (page){
            console.log("page found!");
            res.status(200).send(page);
          } else {
            console.log("no page found");
            res.status(404).send({error_msg: "page not found"});
          }
        },
        function (error) {
          //console.log(error);
          res.status(400).send(error);
        }
      );
  }

  app.put("/api/page/:pageId", updatePage);
  function updatePage(req, res) {
    let pageId = req.params.pageId;
    let body = req.body
    pageModel.updatePage(pageId, body)
      .then(
        function(page) {
          if (page){
            console.log("page found!");
            res.status(200).send(page);
          } else {
            console.log("no page found");
            res.status(404).send({error_msg: "page not found"});
          }
        },
        function (error) {
          //console.log(error);
          res.status(400).send(error);
        }
      );

  }

  app.delete("/api/page/:pageId", deletePage);

  function deletePage(req, res) {
    let pageId = req.params.pageId;
    pageModel.deletePage(pageId)
      .then(
        function (page) {
          if (page){
            console.log("page deleted!");
            res.status(200).send({message: "page deleted"});
          } else {
            console.log("no page found");
            res.status(404).send({error_msg: "page not found"});
          }
        },
        function (error) {
          console.log(error);
          res.status(400).send(error);
        }
      );
  }

  // app.post("/api/website/:websiteId/page", createPage)
  // function createPage(req, res) {
  //   let websiteId = req.params.websiteId
  //   let body = req.body;
  //   for (var i in pages) {
  //     if (pages[i].name === body.name) {
  //       res.status(400).send("This page already exists");
  //       return
  //     }
  //   }
  //
  //   var id = Math.random().toString();
  //   var page = {
  //     _id: id,
  //     name: body.name,
  //     websiteId: websiteId,
  //     description: body.description}
  //   pages.push(page);
  //   res.status(200).json(page)
  // }
  // app.get("/api/page/:pageId", findPageById);
  // function findPageById(req, res) {
  //   let pageId = req.params.pageId
  //   for (var i in pages) {
  //     if (pages[i]._id === pageId) {
  //       res.status(200).send(pages[i]);
  //       return
  //     }
  //   }
  //   res.status(404).send("page not found!");
  // }


  // app.put("/api/page/:pageId", updatePage);
  // function updatePage(req, res) {
  //   let pageId = req.params.pageId;
  //   let body = req.body
  //   for (var i in pages) {
  //     if (pages[i]._id === pageId) {
  //       let newPage = {
  //         _id: pageId,
  //         name: body.name,
  //         websiteId: pages[i].websiteId,
  //         description: body.description
  //       }
  //
  //       pages[i].name = body.name;
  //       pages[i].description = body.description;
  //
  //
  //       res.send(pages[i]);
  //       return;
  //     }
  //   }
  //   res.status(404).send("not found!");
  // }

  // app.delete("/api/page/:pageId", deletePage);
  //
  // function deletePage(req, res) {
  //   let pageId = req.params.pageId;
  //   for (var i in pages) {
  //     if (pages[i]._id === pageId) {
  //       pages.splice(i, 1);
  //       let response = {
  //         message: "page deleted"
  //       }
  //       res.status(200).json(response);
  //       return;
  //     }
  //   }
  //   let response = {
  //     message: "page not found"
  //   }
  //   res.status(404).send(response)
  // }

}
