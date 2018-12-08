const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();
const filePath = path.resolve(__dirname, '../public');
app.use(express.static(filePath));

// route different requests
router(app);

// handle any errors
app.use((err, req, res, next) => {
  res.json({ error: err.message });
});

app.listen(3000, () => console.log('Listening on PORT: 3000'));
