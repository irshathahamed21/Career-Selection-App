
const express = require('express');

const passport = require("./configs/passport")

const {register, login} = require("./controllers/auth.controller")
const productController = require("./controllers/product.controller")
const userController=require("./controllers/user.controller")
const slotController=require("./controllers/slot.controller")
const coachController=require("./controllers/coach.controller")
const appointmentController=require("./controllers/appointment.controller")
const app = express();

app.use(express.json({ extended: false }));

app.use(passport.initialize());

passport.serializeUser(function({user, token}, done) {
    done(null, {user, token});
});
  
passport.deserializeUser(function({user, token}, done) {
    done(err, {user, token});
});

app.get("/auth/google/failure", function(req, res) {
    return res.send("Something went wrong");
})

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/auth/google/failure'
}), function(req, res) {
    const {user, token} = req.user
   return res.redirect('http://localhost:3000/Intrest' + "?"+ token);
   token=""
//    return res.status(200).json({user, token });
});

app.post("/register", register);
app.post("/login", login);
app.use("/products", productController)

app.use('/coach', coachController);
app.use('/users', userController);


app.use('/slots', slotController);

app.use('/appointment', appointmentController);
module.exports = app;