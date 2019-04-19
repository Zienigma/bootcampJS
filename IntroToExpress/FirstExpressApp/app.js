var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
   res.send("Hi there!"); 
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
   res.send("Goodbye!!!") 
});

// "/dog"=> "Meeow!"
app.get("/dog", function(req, res){
    console.log("SOMEONE MADE A REQUEST TO /DOG!!!")
res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
  res.send("Welcome to a subreddit!");  
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
  res.send("Something");  
});

app.get("*", function(req, res){
    res.send("Ghetto Superstar, how you've come so far!");
});

//tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has Started!!!")
});