var app = require("express")();

//below to link external files like css
//app.use(express.static("public"));

app.get("/", function(req, res){
   res.render("home.ejs") 
});

app.get("/something/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("ting.ejs", {tingVar: thing});
});

//tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has Started!!!")
});