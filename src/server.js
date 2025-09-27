const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const passport = require("passport");
const session = require("express-session");
const GitHubStrategy = require("passport-github2").Strategy;

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger.json");

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware global
app.use(cors());
app.use(express.json());

// Auth
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
},
function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
}
));

passport.serializeUser((user, done) => {
    done(null,user);
});
passport.deserializeUser((user, done) => {
    done(null,user);
});

app.get("/", (req, res) => { res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.displayName}` : "Logged Out")});

app.get("/github/callback", passport.authenticate("github", {
    failureRedirect: "/api-docs", session:false}),
    (req, res) => {
        req.session.user = req.user;
        res.redirect('/');
    });

app.use("/", require("./routes"));

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


