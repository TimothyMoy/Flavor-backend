const db = require('../models');

const index = (req, res) => {
  db.Recipe.find({}, (err, foundRecipes) => {
    if (err) console.log('Error in recipes#index', err);

    res.status(200).json({foundRecipes});
  });
};

const show = (req, res) => {
  db.Recipe.findById(req.params.id, (err, foundRecipes) => {
    if (err) console.log('Error in recipe#show: ', err);
    res.status(200).send(foundRecipes);
  });
};

const create = (req, res) => {
  db.Recipe.create(req.body, (err,savedRecipe) => {
    if (err) console.log('Error in recipes#create', err);

    res.status(200).json(savedRecipe);
  });
};

module.exports = {
  index,
  show,
  create,
};