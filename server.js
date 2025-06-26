const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('CiftlikApp API is running');
});

// Placeholder route for streaming cameras
app.get('/cameras', (req, res) => {
  res.json({ message: 'List of live cameras will be here' });
});

// Placeholder route for adopting animals
app.get('/animals', (req, res) => {
  res.json({ message: 'Animal adoption endpoint' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
