var express = require('express');
var router = express.Router();
const { Species } = require('../initModels');


function ensureAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.roleId === 1) {
    return next();
  }
  res.redirect('/login');
}


router.get('/', ensureAdmin, async function (req, res, next) {
  try {
    const species = await Species.findAll();
    res.render('species', { user: req.user, species: species });
  } catch (error) {
    next(error);
  }
});


router.put('/update/:id', ensureAdmin, async function (req, res, next) {
  try {
    await Species.update({ name: req.body.name }, { where: { id: req.params.id } });
    res.json({ message: 'Species updated successfully!' });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', ensureAdmin, async function (req, res, next) {
  try {
    await Species.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Species deleted successfully!' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
