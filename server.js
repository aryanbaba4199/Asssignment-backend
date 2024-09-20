const express = require('express');
const connectDb = require('./db');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogsRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;


app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE']}));
app.use(bodyParser.json());

connectDb();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

app.use('/users',  userRoutes); 
app.use('/blogs', blogRoutes);


// Starting the server
app.listen(port, () => {
  console.log(`Server running on Port : ${port}`); 
});

module.exports = app; 