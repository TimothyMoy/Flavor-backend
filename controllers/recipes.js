const db = require('../models');

const index = (req, res) => {
  db.Recipe.find({}, (err, foundRecipes) => {
    if (err) console.log('Error in recipes#index', err);

    res.status(200).json(foundRecipes);
  });
};

const show = (req, res) => {
  db.Recipe.findById(req.params.id, (err, foundRecipes) => {
    if (err) console.log('Error in recipe#show:', err);
    res.status(200).send(foundRecipes);
  });
};

const create = (req, res) => {
  db.Recipe.create(req.body, (err,savedRecipe) => {
    if (err) console.log('Error in recipes#create:', err);

    res.status(200).json(savedRecipe);
  });
};

const update = (req, res) => {
  db.Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true }, (err, updatedRecipe) => {
    if (err) console.log('Error in recipes#update:', err);

    if(!updatedRecipe) {
      res.status(400).json({message: `Could not find Recipe with id ${req.params.id}`});
    }

    res.json(updatedRecipe);
  });
};

const destory = (req, res) => {
  db.Recipe.findByIdAndDelete(req.params.id, (err, deletedRecipe) => {
    if (err) console.log('Error in recipes#destory:', err);

    res.status(200).json(deletedRecipe);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destory,
};