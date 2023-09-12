const passport = require('passport');
var express = require('express');
var router = express.Router();
const { Animal } = require('../initModels');


function ensureMemberOrAdmin(req, res, next) {
  if (req.isAuthenticated() && (req.user.roleId === 2 || req.user.roleId === 1)) {
    return next();
  }
  res.redirect('/login');
}

//GET animals listing
router.get('/', ensureMemberOrAdmin, async function (req, res, next) {
  try {
    const animals = await Animal.findAll();
    res.render('animals', { user: req.user, animals: animals });  // Pass the user object to the view
  } catch (error) {
    next(error);
  }
});

router.post('/add', ensureMemberOrAdmin, async function(req, res, next) {
  try {
    const { name, species, temperament, size } = req.body;
    await Animal.create({ name, species, temperament, size });
    res.redirect('/animals');
  } catch (error) {
    next(error);
  }
});

router.post('/delete/:id', ensureMemberOrAdmin, async function(req, res, next) {
  try {
    await Animal.destroy({
      where: { id: req.params.id }
    });
    res.redirect('/animals');
  } catch (error) {
    next(error);
  }
});

router.post('/update/:id', ensureMemberOrAdmin, async function(req, res, next) {
  try {
    const { name, species, temperament, size } = req.body;
    await Animal.update({ name, species, temperament, size }, {
      where: { id: req.params.id }
    });
    res.redirect('/animals');
  } catch (error) {
    next(error);
  }
});

router.post('/adopt/:id', ensureMemberOrAdmin, async function(req, res, next) {
  try {
    await Animal.update({ adopted: true }, {
      where: { id: req.params.id }
    });
    res.redirect('/animals');
  } catch (error) {
    next(error);
  }
});


router.post('/cancel-adoption/:id', async function(req, res, next) {
  try {
    const animalId = req.params.id;
    await Animal.update({ adopted: false }, {
      where: { id: animalId }
    });
    res.redirect('/animals');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
