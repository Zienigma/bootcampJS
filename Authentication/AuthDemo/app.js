var express                 = require("express"),
    app                     = express(),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    Campground              = require("./models/campgrounds"),
    Comment                 = require("./models/comment"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    seedDB                  = require("./seeds")
        
    
mongoose.set("useNewUrlParser", true);
mongoose.connect("mongodb://localhost/auth_demo_app");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "Never say anything",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//======================
//ROUTES
//======================

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
});

//AUTH ROUTES
//show sign up form
app.get("/register", function(req, res){
    res.render("register");
});

//handling user signup
app.post("/register", function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

//show login form
app.get("/login", function(req, res) {
    res.render("login");
});
//handling login logic
app.post("/login", passport.authenticate("local",{
        successRedirect:"/campgrounds", 
        failureRedirect: "/login"
        }), function(req, res){
    });
    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started.....")
});