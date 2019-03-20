module.exports=function(app){

   require("./services/user.service.server") (app)
   require("./services/website.service.server") (app)
   require("./services/page.service.server")(app)
   require("./services/widget.service.server") (app)

  // app.get("/api/hello", function(req, res)
  // {res.send("Hello World!")});
  //
  // app.get("/api/hello2", helloFun);
  // function helloFun(req,res){
  //   res.send("Hello World Again!");
  // }
}
