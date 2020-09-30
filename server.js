const express = require('express');
const cors = require('cors')
require('dotenv').config();

const routes = require('./routes');
const PORT = process.env.PORT;
const app = express();

// CORS - cross origin resource sharing
app.use(cors({
  origin: [`http://localhost:3000`],
  methods: "GET,POST,PUT,DELETE",
  optionsSuccessStatus: 200
}));

// middleware - JSON parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// middleware - API routes
// recipes routes
app.use('/api/v1/recipes', routes.recipes);

// Server Listener
app.listen(PORT, () => 
  console.log(`this is on port ${PORT}`)
);

