const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('views/index.html', {
    root: __dirname
  });
});

app.listen(PORT, () => {
  console.log(`Live on ${PORT}`);
});
