const mongoose = require('mongoose');
const Schemda = mongoose.Schema;

const RecipeSchema = new Schema({
  title: String,
  subtitle: String,
  imageUrl: String,
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;