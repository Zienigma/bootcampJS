var mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/posts");
var User = require("./models/users");



Post.create({
    title: "How to cook the besst burgers 4",
    content: "blblablabla...BLAH BLAH BLAH"
 }, function(err, post){
        User.findOne({email: "bob@bmail.com"}, function(err, foundUser){
            if(err){
                console.log(err);
            } else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data){
                    if(err){
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
});

/*
User.findOne({email: "bob@bmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
}); */