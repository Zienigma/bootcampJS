var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost/cat_app");

//add cats to database

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

/*
var george = new Cat({
   name: "Jane",
   age: 1,
   temperament: "Evil"
});

george.save(function(err, cat){
   if(err){
       console.log("Uh oh...")
   } else {
       console.log("Cat's in th bag")
       console.log(cat);
   }
}); */

Cat.create({
    name: "Lily",
    age: 3,
    temperament: "Bland",
}, function(err, cat){    
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrieve cats from database & console.log each
Cat.find({}, function(err, cats){
    if(err){
        console.log("Dammit");
        console.log(err);
    } else {
        console.log("It's raining Cats!");
        console.log(cats);
    }
});