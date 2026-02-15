const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/ask', (req, res) => {
  const { query } = req.body;
  // यहाँ तुम्हारा LLM कॉल आए
