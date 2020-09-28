// imports
const router = require('express').Router()
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.recipes.index);
router.get('/:id', ctrl.recipes.show);

// exports
module.exports = router;