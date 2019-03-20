
module.exports  = function (app) {
  require("server.js")(app)


  app.get("/api/hello", hello);
  function hello(req,res){
    console.log("Hello from Root context handler");
    res.send({message:"Hello from handler in json 123"});
  }
}
