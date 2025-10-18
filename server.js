const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/me', async (req, res) => {
  try {
    const response = await fetch('https://catfact.ninja/fact', { timeout: 5000 });
    
    if (!response.ok) {
      throw new Error('Failed to fetch cat fact');
    }

    const data = await response.json();

    return res.status(200).json({
      status: "success",
      user: {
        email: "shehuumarbaje@gmail.com",
        name: "Baje Shehu Umar",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: data.fact
    });

  } catch (error) {
    console.error("Cat API error:", error.message);

    return res.status(500).json({
      status: "error",
      message: "Unable to fetch cat fact at the moment.",
      user: {
        email: "shehuumarbaje@gmail.com",
        name: "Baje Shehu Umar",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: "Cat fact unavailable at the moment."
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});