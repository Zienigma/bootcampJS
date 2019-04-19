var express = require("express");
var app = express();


app.get("/", function(req, res){
   res.send("Hi there, welcome to the assignment!"); 
});


app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oinkoinkoink",
        cow: "Moooeeebbbbbvvvve",
        dog: "Woof woof woff"
    }
    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound)
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = req.params.times;
    var result = "";
    
    for(var i= 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
});


app.get("*", function(req, res){
    res.send("Ghetto Superstar, how you've come so far!");
});

//tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has Started!!!")
});