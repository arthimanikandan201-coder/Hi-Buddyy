const express = require('express');

const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Hello, Docker! 🚀');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
