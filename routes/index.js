const bcrypt = require('bcrypt');
const saltRounds = 10;
const { User } = require('../initModels');
var express = require('express');
var passport = require('passport');  
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', user: req.user || null });
});

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Express', user: req.user || null });
});

router.post('/login/password', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

router.get('/signup', function (req, res, next) {
  res.render('signup', { title: 'Express', user: req.user || null });
});

router.get('/logout', function(req, res) {
  req.logout(function(err) {
    if (err) {
      return next(err);
    }
    return res.redirect('/login');
  });
});

router.post('/signup', async (req, res, next) => {
  console.log(User);
  const { username, firstname, lastname, password } = req.body;
  

  try {
    
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).send('Username already exists');
    }

   
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // create the new user
    const newUser = await User.create({
      username,
      firstname,
      lastname,
      password: hashedPassword,
      roleId: 2  
    });

    // log the user in
    req.login(newUser, function(err) {
      if (err) return next(err);
      return res.redirect('/');  
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
