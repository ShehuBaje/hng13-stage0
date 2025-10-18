const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");

    const data = {
      status: "success",
      user: {
        email: "shehuumarbaje@gmail.com",
        name: "Baje Shehu Umar",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: response.data.fact,
    };

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Unable to fetch cat fact at the moment",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));