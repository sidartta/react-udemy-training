// External imports
const express = require('express');
const path = require('path');

// Express App Initialization
const app = express();
const port = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '../', 'dist');

// Serving Public Assets
app.use('/', express.static(PUBLIC_PATH));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Start listening to port
app.listen(port, () => {
  console.log(`Server is up and running at http://localhost:${port}`);
});
