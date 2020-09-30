const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  picture: {
    type: String,
  },
  instructions: {
    type: String,
  },
  ingredients: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;