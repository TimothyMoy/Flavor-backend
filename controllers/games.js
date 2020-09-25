const db = require('../models');

const index = (req, res) => {
  db.Recipe.find({}, (err, foundRecipes) => {
    if (err) console.log('Error in recipes#index', err);

    res.json({foundRecipes});
  });
};

module.exports = {
  index,
};