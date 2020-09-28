// imports
const router = require('express').Router()
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.recipes.index);
router.get('/:id', ctrl.recipes.show);
router.post('/', ctrl.recipes.create);

// exports
module.exports = router;