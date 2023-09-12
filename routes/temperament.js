var express = require('express');
var router = express.Router();
const { Temperament } = require('../initModels'); 


function ensureAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.roleId === 1) {
    return next();
  }
  res.redirect('/login');
}

// all temperaments
router.get('/', ensureAdmin, async function (req, res, next) {
  try {
    const temperament = await Temperament.findAll();
    res.render('temperament', { user: req.user, temperament: temperament });
  } catch (error) {
    next(error);
  }
});

// update
router.put('/update/:id', ensureAdmin, async function (req, res, next) {
  try {
    await Temperament.update({ name: req.body.name }, { where: { id: req.params.id } });
    res.json({ message: 'Temperament updated successfully!' });
  } catch (error) {
    next(error);
  }
});

//delete 
router.delete('/:id', ensureAdmin, async function (req, res, next) {
  try {
    await Temperament.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Temperament deleted successfully!' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
