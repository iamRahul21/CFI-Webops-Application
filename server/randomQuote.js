const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors')

app.use(cors());
app.get('/get-quote', async (req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    const randomQuote = response.data[0].q; // extracting first quote 
    res.json({
      quote: randomQuote
    });


  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch a quote' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
