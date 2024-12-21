const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;


app.get("/name", (req, res) => {
  res.send("Aya"); 
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});