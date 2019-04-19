var mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
//mongoose.connect("mongodb://localhost/blog_demo_2");

//POST - title, content
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});

module.exports = mongoose.model("Post", postSchema);